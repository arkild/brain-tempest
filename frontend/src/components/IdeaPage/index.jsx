//The purpose of this page is to be a form for new ideas.
import {useState, useEffect} from "react"
//The only route I'm posting here for now
import {postIdea} from "../../../utils/backend"
// I'm bringing in Navigate to redirect the user back to the home page once this submits.
import {useNavigate} from "react-router-dom"

//This page doesn't need any props - data is being created, not altered
export default function IdeaPage() {
    //Create Form Data is needed for state change in react
    const [createFormData, setCreateFormData] = useState({
        name: '',
        problem: '',
        image: '',
        features: '',
        needHelp: ''
    })
    //Navigate needs to work for redirecting
    const navigate = useNavigate();

    //Update the form as the user types
    function handleInputChange(event) {
        setCreateFormData({
            ...createFormData,
            [event.target.name]: event.target.value
        })
    }

    //Form submission logic
    function handleSubmit(event) {
        //no reloads
        event.preventDefault();
        //wipe the form
        setCreateFormData({
            name: '',
            problem: '',
            image: '',
            features: '',
            needHelp: '',
        })
        //Post the idea in the backend
        postIdea({...createFormData})
        //Go back to the home page.
        navigate('/home')
    }

    return (
        <div>
            <div>
                <h2>Create a new idea!</h2>
                <form className="" onSubmit={handleSubmit}>
                    <div>
                        <input
                            name="name"
                            className=""
                            placeholder="The name of your project"
                            value={createFormData.name}
                            onChange={handleInputChange}
                        />
                        <br/>
                        <textarea
                            name="problem"
                            className=""
                            placeholder="What is the problem your project is trying to solve?"
                            value={createFormData.problem}
                            onChange={handleInputChange}
                        />
                        <br/>
                        <input
                            name="image"
                            className=""
                            placeholder="Paste the link to an image for your project here."
                            value={createFormData.image}
                            onChange={handleInputChange}
                        />
                        <br/>
                        <textarea
                            name="features"
                            className=""
                            placeholder="What are the features of your application?"
                            value={createFormData.features}
                            onChange={handleInputChange}
                        />
                        <br/>
                        <textarea
                            name="needHelp"
                            className=""
                            placeholder="What kind of help are you looking for with your idea?"
                            value={createFormData.features}
                            onChange={handleInputChange}
                        />
                        <div>
                            <button
                                type="submit" className="">
                                    Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}