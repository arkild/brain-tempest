// Require the modules
require('dotenv').config()
const express = require('express');
// CORS is required because our app communicates with both the front and the backend
const cors = require('cors')
const path = require('path')

// This connects the db, models, and seed
const db = require('./models')

// This requires the routes in the controllers.
// We're using 2 models, so we need 2 requirements

// I'm coding out this line below for now until I need it.
const feedbackCtrl = require('./controllers/feedbacks')
const ideaCtrl = require ('./controllers/ideas')
const usersCtrl = require('./controllers/users')

// Create express
const app = express();

// The middleware
// "cross origin allowance"
app.use(cors())
// This allows post/put/patch routes
app.use(express.urlencoded({extended: true}));
app.use(express.json())

//Mount routes
//I suppose the URLs don't mean too much in here as all of the URLs are going to be handled by react. We can almost treat these URLs like variables in their own way
//I'm commenting out this line below until I need it.
app.use('/feedback', feedbackCtrl)
app.use('/ideas', ideaCtrl)
app.use('/users', usersCtrl)

// The Seed route (This will only seed when the URL is entered manually - there will be no option to seed from the site itself.)
//(localhost:3000/seed)
app.get('/seed', function (req, res) {
    //Remove all of the ideas from the database
    db.Idea.deleteMany({})
        .then(removedIdeas => {
            //deletedCount I believe is internally built into this
            console.log(`We've successfully deleted ${removedIdeas.deletedCount} ideas from the database`)
            db.Idea.insertMany(db.seedIdeas)
            //insert the seed array
                .then(addedIdeas => {
                    console.log(`Added ${addedIdeas.length} ideas to the database.`)
                    res.json(addedIdeas)
                })
        })
});

// Have the app listen to a specified port
app.listen(process.env.PORT, function () {
    console.log('We have Express on port', process.env.PORT);
});