// Require Mongoose. Without this, we can't make this schema a model for Mongo. 
const mongoose = require('mongoose');
// Since we're pulling from a 'child' schema, we need to require it
const feedbackSchema = require('./feedback.js')

//Set up the schema for idea submissions
const ideaSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        problem: {type: String, required: true},
        image: {type: String, default: ""},
        features: {type: String, required: true},
        needHelp: {type: String, required: true},
        // Need a mongoose reference to the User model.
        userId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
        //This feedback is tied to the feedback schema.
        feedback: [feedbackSchema]
    }
)


//Export this schema as a Mongoose Model which can be accessed in `models/index.js`
module.exports = mongoose.model('Idea', ideaSchema);