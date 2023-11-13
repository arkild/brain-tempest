import {useState, useEffect} from "react"
//Unlike Aesthetic Domain, I don't have an individual schema for comments. I instead have an array that can be added to. Getting the details of the idea, I can likely just pull the array data itself from the Idea that I get.
import {postFeedback, getIdea} from "../../../utils/backend"
import Feedback from "../Feedback"

export default function FeedbackSection({ideaId}) {
    // Save the feedback that's queried in state
    const [feedback, setFeedback] = useState([])
    const [showCreateForm, setShowCreateForm] = useState(false)
    const [createFormData, setCreateFormData] = useState({
        name: '',
        ideaRating: 0, //Needs a number default
        feedback: ''
    })

    // Pull up all the feedback that pertains to the idea
    useEffect(() => {
        //This pulls the specific idea, where the feedback is an array in this schema.
        getIdea(ideaId)
            .then(idea => {setFeedback(idea.feedback)})
        //This will pull the array of multiple indices of feedbackArray.
    }, [])

    // Update the form fields as the user types.
    function handleInputChange(event) {
        setCreateFormData({
            ...createFormData,
            [event.target.name]: event.target.value
        })
    }

    // This renders a form that allows a user to create feedback on submit.
    function toggleCreateForm() {
        setShowCreateForm(!showCreateForm)
    }

    //Update the feedback in the feedback section once there's an adjustment made in the database.
    function refreshFeedback() {
        getIdea(ideaId)
            .then(idea => {setFeedback(idea.feedback)})
    }

    //Form submission logic
    function handleSubmit(event) {
        //no reloads
        event.preventDefault();
        //clear the form
        setCreateFormData({
            name: '',
            ideaRating: 0,
            feedback: '',
        })
        //close the form
        setShowCreateForm(false)
        //post the feedback in the backend.
        postFeedback(ideaId, createFormData)
            .then(() => refreshFeedback())
    }

    //Render the feedback conditionally if it exists.
    let feedbackElements = [<p key='0' className='text-center'>There's no feedback for this idea yet - go ahead and put down your thoughts!</p>]
    if (feedback.length > 0) {
        feedbackElements = feedback.map(feedback => {
            return <Feedback
                key={feedback._id}
                data={feedback}
                refreshFeedback={refreshFeedback}/>
        })
    }

    //change the display of the button depending on form state
    let buttonText = "Submit some new feedback!"
    if (showCreateForm) {
        buttonText = "(Close the form without submitting)"
    }

    return (
        <div>
            <div className="flex flex-col justify-center">
            <h1 className="text-xl font-bold mt-5 text-center">Current Feedback</h1>
            <button onClick={toggleCreateForm} className="bg-purple-800 text-white py-2 px-4 rounded-lg hover:bg-purple-900 m-2">
                {buttonText}
            </button></div>
            {showCreateForm && 
            <form onSubmit={handleSubmit} className="mx-auto p-2">
                <p className="mb-2">Enter your name:</p>
                <input
                    name="name"
                    className="bg-gray-700 w-[60vw] rounded-lg text-center"
                    placeholder="Captain Attractive"
                    value={createFormData.name}
                    onChange={handleInputChange}
                />
                <br/><br/>
                <p className="mb-2">Rate the idea on a scale from 0-10:</p>
                <select
                name="ideaRating"
                value={createFormData.ideaRating}
                onChange={handleInputChange}
                className="border border-gray-500 rounded-md p-2 mb-2">
                {/* This takes an array of values between 0-10 and maps them as options, kinda like the way we mapped out all the options in Furever Friends manually. (from ChatGPT) */}
                {[...Array(11).keys()].map((val) => (
                    <option key={val} value={val}>
                    {val}
                    </option>
                ))}
                </select>
                <br/>
                <p className="mb-2">Your feedback:</p>
                <textarea
                    name="feedback"
                    className="bg-gray-700 w-[60vw] rounded-lg text-center resize-none"
                    placeholder="Be nice. Remember, humans made this!"
                    value={createFormData.feedback}
                    onChange={handleInputChange}
                />
                <button type="submit" className="bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-900 m-2">
                    Submit
                </button>
            </form>
        }
        {feedbackElements}
        </div>
    )
} 