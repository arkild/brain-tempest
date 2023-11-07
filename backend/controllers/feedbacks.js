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
        .then(idea => res.json(req.params.ideaId))
})

//This line is needed or your middleware will break
module.exports = router