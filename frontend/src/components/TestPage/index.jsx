// This is going to be a page I make whose only purpose is to test full CRUD capabilities on my back-end to ensure it's all good, and then I can migrate these components over to their respective places.

import {useState} from "react";
import {useParams, useNavigate} from "react-router-dom"
import {signUp, logIn} from "../../../utils/backend"

export default function TestPage() {
    const {formType} = useParams()
    const navigate = useNavigate();
    let actionText
    //Ternary argument to determine whether the form is a login or signup form
    formType === 'login' ? actionText = 'Log In' : actionText = 'Sign Up'
    const [formData, setFormData] = useState ({
        email: '',
        password: '',
    });
    //Any time the input changes on these fields, the form data will change to match it.
    const handleInputChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    //When the form submits, execute authentication logic.
    async function handleSubmit(event) {
        //Don't let the page refresh
        event.preventDefault()
        //Check what the URL parameter is to determine what request to make
        //Either way, the request till take the token produced from the form data and save it to local storage.
        if (formType === 'login') {
            const {token} = await logIn(formData)
            localStorage.setItem('userToken', token)
        } else {
            const {token} = await signUp(formData)
            localStorage.setItem('userToken', token)
        }
        // redirect back to the home page once this completes
        // navigate('/')
    }
    return (
        <>
        <h1>Auth Form Test Section</h1>
        <div className="flex items-center justify-center h-[90vh]">
            <div className="bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-md">
                <h2 className="text-3xl text-center font-bold text-gray-100 mb-8">Login</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-100 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full p-2 text-gray-900 rounded-md focus:outline-none focus:ring focus:border-blue-600"
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-100 font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full p-2 text-gray-900 rounded-md focus:outline-none focus:ring focus:border-blue-600"
                            id="password"
                            name="password"
                            type="password"
                            minLength="6"
                            required
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-green-700 text-gray-100 rounded-md hover:bg-green-800 transition duration-300">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}