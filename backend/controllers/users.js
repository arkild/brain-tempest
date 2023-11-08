//URL route: localhost:3000/users

//Module requirements
const jwt = require('jwt-simple')
const express = require('express')
// With Router, we can do routes outside of server.js
const router = express.Router()

//Require the DB connection and models
const db = require('../models')

//Require the JWT config
const config = require('../../jwt.config.js')

//Routes

//Sign Up (Create user)
router.post('/signup', (req, res) => {
    // Create a new user
    db.User.create(req.body)
        .then(user => {
            //Put a JWT on the user if the database creates them successfully
            const token = jwt.encode({id: user.id}, config.jwtSecret)
            res.json({token:token})
        })
        // Return an error if the database cannot create the user
        .catch(() => {
            res.sendStatus(401)
                .json({ data: 'Could not create the new user. Please try again.'})
        })
})

//Export the routes to be used in server.js
module.exports = router