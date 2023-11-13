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
        updateFeedback(data._id, editFormData)
            .then(() => refreshFeedback())
    }

    //Delete Feedback
    function handleDelete() {
        deleteFeedback(data._id)
            .then(() => refreshFeedback())
    }

    //Default appearance of each comment
    let feedbackElement = <div className="border-2 mx-auto mb-16 p-5">
        <p className="font-bold">Name: {data.name}</p>
        <p>Rating: {data.ideaRating}</p>
        <p>"{data.feedback}"</p>
        <div className="flex justify-between">
        <button className="bg-green-800 text-white py-2 px-4 rounded-lg hover:bg-green-900 mt-4" onClick={() => {setShowEditForm(true)}}>Edit</button>
        <button className="bg-red-800 text-white py-2 px-4 rounded-lg hover:bg-red-900 mt-4" onClick={handleDelete}>Delete</button>
        </div>
    </div>

    //We're changing the feedback to a form if the Edit button is clicked and the "showEditForm" variable is true.
    if (showEditForm) {
        feedbackElement = <form onSubmit={handleSubmit} className="border-2 mx-auto p-4">
            <p className="mb-2">Edit name:</p>
            <input 
                name="name"
                className="bg-gray-700 w-[60vw] rounded-lg text-center"
                placeholder="Your name"
                value={editFormData.name}
                onChange={handleInputChange} />
            <br/><br/>
            <p className="mb-2">Edit rating:</p>
            <select
                name="ideaRating"
                className="border border-gray-500 rounded-md p-2 mb-2"
                value={editFormData.ideaRating}
                onChange={handleInputChange}>
                {/* This takes an array of values between 0-10 and maps them as options, kinda like the way we mapped out all the options in Furever Friends manually. (from ChatGPT) */}
                {[...Array(11).keys()].map((val) => (
                    <option key={val} value={val}>
                    {val}
                    </option>
                ))}
                </select>
            <br/>
            <p className="mb-2">Edit Feedback:</p>
            <textarea
                name="feedback"
                className="bg-gray-700 w-[60vw] rounded-lg text-center resize-none"
                placeholder="Let us know what you think!"
                value={editFormData.feedback}
                onChange={handleInputChange}
            />
            <div className="flex justify-between">
                <button onClick={() => {setShowEditForm(false)}}
                className="bg-green-800 text-white py-2 px-4 rounded-lg hover:bg-green-900 mt-4">
                    Close
                </button>
                <button type="submit"
                className="bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-900 mt-4">
                    Submit
                </button>
            </div>
        </form>
    }

    return feedbackElement
}