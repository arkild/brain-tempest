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
            .then(navigate('/home'))
        //Then refresh after redirecting (probably a cleaner way to do this)
    }

    return (
        <div>
            <div className="text-center">
                <h2 className="text-4xl mt-10 p-4 text-center">Create a new idea!</h2>
                <form className="text-xl p-4 text-center" onSubmit={handleSubmit}>
                    <div className="w-[60vw] mx-auto">
                        <p className="">The name of your project:</p>
                        <input
                            name="name"
                            className="bg-gray-700 w-[60vw] rounded-lg text-center resize-none mb-6"
                            placeholder="Facekickers Anonymous"
                            value={createFormData.name}
                            onChange={handleInputChange}
                        />
                        <br/>
                        <p className="">What's the problem your project is trying to solve?</p>
                        <textarea
                            name="problem"
                            className="bg-gray-700 w-[60vw] rounded-lg text-center resize-none mb-6"
                            placeholder="I want to be able to kick people in the face, but I don't want to get in trouble for doing it"
                            value={createFormData.problem}
                            onChange={handleInputChange}
                        />
                        <br/>
                        <p className="">To add an image, please paste the link to it <i>(upload functionality coming soon!)</i></p>
                        <input
                            name="image"
                            className="bg-gray-700 w-[60vw] rounded-lg text-center resize-none mb-6"
                            placeholder="(use '/phil.png' for testing if you don't have an image)"
                            value={createFormData.image}
                            onChange={handleInputChange}
                        />
                        <br/>
                        <p className="">What are the features your idea currently has, or that you're planning to implement?</p>
                        <textarea
                            name="features"
                            className="bg-gray-700 w-[60vw] rounded-lg text-center resize-none mb-6"
                            placeholder="I'll surprise you :D"
                            value={createFormData.features}
                            onChange={handleInputChange}
                        />
                        <br/>
                        <p className="">Where would you like your feedback to be centered around? Where do you feel you need help?</p>
                        <textarea
                            name="needHelp"
                            className="bg-gray-700 w-[60vw] rounded-lg text-center resize-none mb-6"
                            placeholder="It's too hard to actually do what I want without getting arrested for assault"
                            value={createFormData.needHelp}
                            onChange={handleInputChange}
                        />
                        <div>
                            <button
                                type="submit" className="submit bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-900 m-2">
                                    Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}