//Pull the .env config and Mongoose
require('dotenv').config()
const mongoose = require('mongoose');

//Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODBURI);
const db = mongoose.connection

//Once the DB is started, this message will appear.
db.on('connected', function() {
    console.log(`MongoDB is live: ${db.name} at ${db.host}:${db.port}`);
});

// Export models and seed data to `server.js`
module.exports = {
    Feedback: require('./feedback'),
    Idea: require('./idea'),
}