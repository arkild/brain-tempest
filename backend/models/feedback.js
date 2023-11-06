// Require Mongoose
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    ideaRating: {type: Number, min: 0, max: 10, required: true},
    feedback: {type: String, required: true},
    dateAdded: {type: Date, default: Date.now}
})

//export the schema or we can't use it anywhere else
//Unlike the mongoose.model line in Idea, we don't need that here as we're not calling the Feedback model, rather we're calling the Idea model and attaching the request to the corresponding models.
module.exports = feedbackSchema