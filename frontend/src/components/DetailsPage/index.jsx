import FeedbackSection from "../FeedbackSection"
//This will help to redirect the delete to the main page.
import {useNavigate} from "react-router-dom"
//Import the specific functionality to delete the idea
import {deleteIdea} from "../../../utils/backend"

//Depending on where I get this data, sometimes I'll have to deconstruct it using {}, and sometimes I don't. It's weird but if it works, it works.
export default function DetailsPage(idea) {
    //I'm going to put on the ability to delete the idea directly on the idea's details page.
    const navigate = useNavigate();

    function handleDelete() {
        console.log(idea._id)
        deleteIdea(idea._id)
        navigate("/home")
        window.location.reload();
    }
    return (
        
        <>
        {console.log(idea)}
        <div>
            <h1>{idea.name}</h1>
            <img src={idea.image} />
            <p>Problem: {idea.problem}</p>
            <p>Features: {idea.features}</p>
            <p>What do you need help with? {idea.needHelp}</p>
        </div>
        <button onClick={handleDelete} className="">DELETE IDEA</button>
        <FeedbackSection ideaId={idea._id} />
        </>
    )
}