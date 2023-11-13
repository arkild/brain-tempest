//Prefix for these routes: localhost:3000/ideas

//Require express and router. Router's needed so we can do routes here instead of only in server.js
const express = require('express')
const router = express.Router()
//This is specifically for authorization to bind CRUD to whoever is logged in.
const jwt = require('jwt-simple');

//Require the DB connection and its models
const db = require('../models')

// Require JWT config
const config = require('../../jwt.config.js')

//This is middleware to check JWTs; we'll be passing it into any route that requires authorization.

const authMiddleware = (req, res, next) => {
    //Check to make sure the authorization header and token are there
    const token = req.headers.authorization;
    if (token) {
        try {
            //Decode using the secret key and then add the decoded payload to the request object.
            const decodedToken = jwt.decode(token, config.jwtSecret)
            req.user = decodedToken;
            next();
        } catch (err) {
            //Return an error if the token is invalid
            res.status(401).json({message: 'Invalid token'})
        }
    } else {
        //If there's no authorization header or there's a wrong format...
        res.status(401).json({message: 'The Authorization header is either incorrect or missing.'})
    }
}

//Routes
//Unlike Express, I don't believe we're rendering/redirecting here.

//Create Route
//I'm building this first. I don't have any data to test and display, so this will let me do that.

// // === These are the non-auth routes; please delete them when the auth ones are fully tested and OK
// router.post('/', (req, res) => {
//     db.Idea.create(req.body)
//         .then(idea => res.json(idea))
// })

// //Update Route (Put)
// router.put('/:id', (req, res) => {
//     db.Idea.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         {new: true})
//         .then(idea => res.json(idea))
// })

// //Destroy route (Delete)
// router.delete('/:id', (req, res) => {
//     db.Idea.findByIdAndDelete(req.params.id)
//         .then(() => res.json({deletedIdeaId: req.params.id}))
// })
// // == These are the non-auth routes; please delete them when the auth ones are fully tested and OK

//Auth-based Create Idea route
router.post('/', authMiddleware, (req, res) => {
    //Perform any actions that require authorization
    db.Idea.create({
        ...req.body,
        // Since the middleware validated the JWT token and decoded it, the user ID is the one we want.
        userId: req.user.id
    })
        .then(idea => res.json(idea))
})

//Auth-based Update Idea route
router.put('/:id', authMiddleware, async (req, res) => {
    //Check for a User match on the editor and the poster
    const userIdea = await db.Idea.findById(req.params.id)
    //The .toString() method is required because the types were not matching and thus the === did not work
    if (userIdea.userId.toString() === req.user.id) {
        //If we have a match, update the idea
        const newIdea = await db.Idea.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
        res.json(newIdea)
    } else {
        res.status(401).json({message: 'Invalid user or token'});
    }
})

//Auth-based Delete Idea route
router.delete('/:id', authMiddleware, async(req, res) => {
    //Check for a match on idea poster and delete requester
    const userIdea = await db.Idea.findById(req.params.id)
    // We're using the .toString() method because the types don't match for === to work
    if (userIdea.userId.toString() === req.user.id) {
        const deletedIdea = await db.Idea.findByIdAndDelete(req.params.id)
        res.send(`The idea ${deletedIdea.name} has been successfully deleted.`)
    } else {
        res.status(401).json({ message: 'Invalid user or token'});
    }
})

//Index Route (Read)
router.get('/', function(req, res) {
    db.Idea.find({})
        .then((ideas) => res.json(ideas))
})

//Read a specific idea in detail, does not require authorization
router.get('/:ideaId', function (req, res) {
	db.Idea.findById(req.params.ideaId).then((idea) => res.json(idea));
});

//This line is needed or your middleware will break
module.exports = router