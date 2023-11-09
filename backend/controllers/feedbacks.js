//Prefix for these routes: localhost:3000/feedback

//Require express and router. Router's needed so we can do routes here instead of only in server.js
const express = require('express')
const router = express.Router()
// We need authorization for Feedback adjustment
const jwt = require('jwt-simple');

//Require the DB connection and its models
const db = require('../models')

//require JWT config
const config = require('../../jwt.config.js')

//Needing authorization middleware
const authMiddleware = (req, res, next) => {
    //check for the authorization header and a token
    const token = req.headers.authorization;
    if (token) {
        try {
            //decode the token with the secret key and then add the decoded results to the request object
            const decodedToken = jwt.decode(token, config.jwtSecret);
            req.user = decodedToken;
            next();
        } catch (err) {
            //Return an error if the token's not valid
            res.status(401).json({message: 'Token is not valid'});
        }
    } else {
        // Return an error if the "authorization" header is missing or is formatted incorrectly
        res.status(401).json({message: 'The authorization header is either missing or incorrect.'})
    }
}

//Routes
//Unlike Express, I don't believe we're rendering/redirecting here.

// // === This block of code is for routes that do not require authorization. Once the Authorization testing works we can delete this code (after it's also tested to be successful in the frontend)

// // Create route first so I can manipulate that data without seeds
// router.post('/create/:ideaId', (req, res) => {
//     db.Idea.findByIdAndUpdate(
//         req.params.ideaId,
//         {$push: {feedback: req.body}},
//         {new: true})
//         .then(idea => res.json(idea))
//         //This pulled up the idea itself and then the feedback about it. So now I need to do something similar with the update route.
// })

// //Reading - I haven't made the route yet; I don't know if it will actually be required as I've got full CRUD on the ideas themselves and the "reading" is done from the idea page's feedback section.

// // Update Route (This is referencing the feedback itself)
// router.put('/:id', (req, res) => {
//     db.Idea.findOneAndUpdate(
//         {'feedback._id': req.params.id},
//         {feedback: req.body},
//         {new: true})
//         .then(idea => res.json(idea))
//         //This pulled up the idea with the feedback array attached to it.
// })

// // Delete Route
// router.delete('/:id', (req, res) => {
//     //We are "deleting" the index of the array that pertains to the feedback left by using the "pull" method assigned to the specific feedback ID that was given.
//     db.Idea.findOneAndUpdate(
//         {'feedback._id': req.params.id},
//         {$pull: {feedback: {_id: req.params.id}}},
//         {new: true})
//         .then(idea => res.json(`deleted ${req.params.id}`))
// })

// // === This block of code is for routes that do not require authorization. Once the Authorization testing works we can delete this code (after it's also tested to be successful in the frontend)

// Create Feedback, requiring authorization
router.post('/create/:ideaId', authMiddleware, (req, res) => {
    //The Middleware check passed, so now we do this down here.
    db.Idea.findByIdAndUpdate(
        req.params.ideaId,
        //We're attaching the userId field from the submitter to the request's body.
        {$push: {feedback: {...req.body, userId: req.user.id}}},
        {new: true})
        .then(idea => res.json(idea))
        //This pulled up the idea itself and then the feedback about it. So now I need to do something similar with the update route.
})

// Update Feedback, requiring authorization
router.put('/:id', authMiddleware, async (req, res) => {
    // We need to pull the feedback itself
    // Check who made the feedback against the one making the request
    // If they're the same, execute the route logic
    //Locate the idea attached to the ID passed as a param
    const feedbackCheck = await db.Idea.findOne({'feedback._id': req.params.id})
    // This is picking the specific feedback that pulled the Idea in the first place.
    const userFeedback = await feedbackCheck.feedback.find(fb => fb._id.toString() === req.params.id)
    if (userFeedback.userId.toString() !== req.user.id) {
        return res.status(401).json({message: "You are not authorized to modify this."})
    } else {
    db.Idea.findOneAndUpdate(
        {'feedback._id': req.params.id},
        {feedback: {...req.body, userId: req.user.id}},
        {new: true})
        .then(idea => res.json(idea))}
        //This pulled up the idea with the feedback array attached to it.
})

//This line is needed or your middleware will break
module.exports = router