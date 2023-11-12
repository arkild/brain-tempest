import {useState} from "react"
import {updateFeedback, deleteFeedback} from "../../../utils/backend"

export default function Feedback ({data, refreshFeedback}) {
    const [showEditForm, setShowEditForm] = useState(false)
    // These are the parts of the Feedback schema that we are capturing to leave feedback. The other ones are added/adjusted automatically after.
    const [editFormData, setEditFormData] = useState ({
        name: data.name,
        ideaRating: data.ideaRating,
        feedback: data.feedback,
        userId: data.userId
    })

    //As the user types, change the state of the form data.
    function handleInputChange(event) {
        setEditFormData({
            ...editFormData,
            [event.target.name]: event.target.value
        })
    }

    //When the form submits, execute the logic
    function handleSubmit(event) {
        //No reloading
        event.preventDefault()
        //close the form
        setShowEditForm(false)
        //update the feedback in the backend
        updateFeedback(editFormData, data._id)
            .then(() => refreshFeedback)
    }

    //Delete Feedback
    function handleDelete() {
        deleteFeedback(data._id)
            .then(() => refreshFeedback())
    }

    //Default appearance of each comment
    let feedbackElement = <div className="border-2 mx-auto">
        <p className="font-bold">{data.name}</p>
        <p>Rating: {data.ideaRating}</p>
        <p>{data.feedback}</p>
        <div>
        <button onClick={() => {setShowEditForm(true)}}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        </div>
    </div>

    //We're changing the feedback to a form if the Edit button is clicked and the "showEditForm" variable is true.
    if (showEditForm) {
        feedbackElement = <form onSubmit={handleSubmit} className="border-2 mx-auto">
            <input 
                name="name"
                className="w-full bg-gray-100"
                placeholder="Your name"
                value={editFormData.name}
                onChange={handleInputChange} />
            <br/>
            <input
                name="ideaRating"
                className=""
                placeholder="0"
                min="0"
                max="10"
                type="number"
                value={editFormData.ideaRating}
                onChange={handleInputChange} />
            <br/>
            <textarea
                name="feedback"
                className=""
                placeholder="Let us know what you think!"
                value={editFormData.feedback}
                onChange={handleInputChange}
            />
            <div>
                <button onClick={() => {setShowEditForm(false)}}
                className="">
                    Close
                </button>
                <button type="submit"
                className="">
                    Submit
                </button>
            </div>
        </form>
    }

    return feedbackElement
}