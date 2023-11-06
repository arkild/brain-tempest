//Prefix for these routes: localhost:3000/ideas

//Require express and router. Router's needed so we can do routes here instead of only in server.js
const express = require('express')
const router = express.Router()

//Require the DB connection and its models
const db = require('../models')

//Routes
//Unlike Express, I don't believe we're rendering/redirecting here.

//Create Route
//I'm building this first. I don't have any data to test and display, so this will let me do that.
router.post('/', (req, res) => {
    db.Idea.create(req.body)
        .then(idea => res.json(idea))
})

//Update Route (Put)
router.put('/:id', (req, res) => {
    db.Idea.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true})
        .then(idea => res.json(idea))
})

//Destroy route (Delete)
router.delete('/:id', (req, res) => {
    db.Idea.findByIdAndDelete(req.params.id)
        .then(() => res.json({deletedIdeaId: req.params.id}))
})

//Index Route (Read)
router.get('/', function(req, res) {
    db.Idea.find({})
        .then((ideas) => res.json(ideas))
})

//This line is needed or your middleware will break
module.exports = router