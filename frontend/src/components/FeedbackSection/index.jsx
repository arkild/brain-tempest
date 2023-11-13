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
        setCreatFormData({
            name: '',
            ideaRating: 0,
            feedback: '',
        })
        //close the form
        setShowCreateForm(false)
        //post the feedback in the backend.
        postFeedback({...createFormData, ideaId: ideaId})
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
    let buttonText = "Create"
    if (showCreateForm) {
        buttonText = "Close"
    }

    return (
        <div>
            <h1 className="text-xl font-bold">Current Feedback</h1>
            <button onClick={toggleCreateForm} className="">
                {buttonText}
            </button>
            {showCreateForm && 
            <form onSubmit={handleSubmit} className="mx-auto">
                <input
                    name="name"
                    className=""
                    placeholder="Your Name"
                    value={createFormData.name}
                    onChange={handleInputChange}
                />
                <br/>
                <input
                    name="ideaRating"
                    className=""
                    placeholder="0"
                    min="0"
                    max="10"
                    type="number"
                    value={createFormData.ideaRating}
                    onChange={handleInputChange} />
                <br/>
                <textarea
                    name="feedback"
                    className=""
                    placeholder="Let us know what you think!"
                    value={createFormData.feedback}
                    onChange={handleInputChange}
                />
                <button type="submit" className="">
                    Submit
                </button>
            </form>
        }
        {feedbackElements}
        </div>
    )
} 