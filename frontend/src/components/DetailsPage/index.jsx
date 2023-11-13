import FeedbackSection from "../FeedbackSection"
//This will help to redirect the delete to the main page.
import {useNavigate} from "react-router-dom"
//Import the specific functionality to delete the idea
import {deleteIdea} from "../../../utils/backend"

//Depending on where I get this data, sometimes I'll have to deconstruct it using {}, and sometimes I don't. It's weird but if it works, it works.
export default function DetailsPage(idea) {
    //I'm going to put on the ability to delete the idea directly on the idea's details page.
    const navigate = useNavigate();

    function handleDelete(event) {
        event.preventDefault()
        deleteIdea(idea._id)
            .then(() => navigate("/"))
        // window.location.reload();
    }
    return (
        
        <>
        <div className="flex flex-col items-center w-[60%] max-w-[500px] mx-auto">
            <h1 className="mt-10 font-bold text-4xl"><i className="text-blue-400">{idea.name}</i></h1>
            <img className="mt-10 mb-4 w-[60%] max-w-[500px]" src={idea.image} />
            <p><strong className="text-xl text-purple-400">Problem:</strong> {idea.problem}</p>
            <p><strong className="text-xl text-purple-400">Features:</strong> {idea.features}</p>
            <p><strong className="text-xl text-purple-400">What do you need help with?</strong> {idea.needHelp}</p>
        
        <button onClick={handleDelete} className="bg-red-800 text-white py-2 px-4 rounded-lg hover:bg-red-900 mt-4">DELETE IDEA</button>
        <FeedbackSection ideaId={idea._id} />
        </div>
        </>
    )
}