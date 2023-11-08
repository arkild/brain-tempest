// Require Mongoose
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    name: {type: String, required: true},
    ideaRating: {type: Number, min: 0, max: 10, required: true},
    feedback: {type: String, required: true},
    //Need a user reference to the feedback as well as the idea.
    //This way we can indicate who posted the feedback, and also give a possibility of displaying all feedback/ideas on the user profile pages on Stretch
    userId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    dateAdded: {type: Date, default: Date.now},
})

//export the schema or we can't use it anywhere else
//Unlike the mongoose.model line in Idea, we don't need that here as we're not calling the Feedback model, rather we're calling the Idea model and attaching the request to the corresponding models.
//If I want to display the user's feedback in a list on their profile page, this may need to be changed around. We'll have to see on that.
module.exports = feedbackSchema