//Prefix for these routes: localhost:3000/feedback

//Require express and router. Router's needed so we can do routes here instead of only in server.js
const express = require('express')
const router = express.Router()

//Require the DB connection and its models
const db = require('../models')

//Routes
//Unlike Express, I don't believe we're rendering/redirecting here.

// Create route first so I can manipulate that data without seeds
router.post('/create/:ideaId', (req, res) => {
    db.Idea.findByIdAndUpdate(
        req.params.ideaId,
        {$push: {feedback: req.body}},
        {new: true})
        .then(idea => res.json(idea))
        //This pulled up the idea itself and then the feedback about it. So now I need to do something similar with the update route.
})

//Reading - I haven't made the route yet; I don't know if it will actually be required as I've got full CRUD on the ideas themselves and the "reading" is done from the idea page's feedback section.

// Update Route (This is referencing the feedback itself)
router.put('/:id', (req, res) => {
    db.Idea.findOneAndUpdate(
        {'feedback._id': req.params.id},
        {feedback: req.body},
        {new: true})
        .then(idea => res.json(idea))
        //This pulled up the idea with the feedback array attached to it.
})

// Delete Route
router.delete('/:id', (req, res) => {
    //We are "deleting" the index of the array that pertains to the feedback left by using the "pull" method assigned to the specific feedback ID that was given.
    db.Idea.findOneAndUpdate(
        {'feedback._id': req.params.id},
        {$pull: {feedback: {_id: req.params.id}}},
        {new: true})
        .then(idea => res.json(`deleted ${req.params.id}`))
})

//This line is needed or your middleware will break
module.exports = router