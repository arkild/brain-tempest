import {useState} from "react";
import {useParams, useNavigate} from "react-router-dom"
import {signUp, logIn} from "../../../utils/backend"

export default function AuthFormPage() {
    const {formType} = useParams()
    const navigate = useNavigate();
    let actionText
    formType === 'login' ? actionText = 'Log In' : actionText = 'Sign Up'
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    //Form updating as there's typing
    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value})
    }

    //Auth logic on form submit
    async function handleSubmit(event) {
        //No refreshing
        event.preventDefault();
        //Check what the URL parameter is so we know what request to do
        if (formType === 'login') {
            const {token} = await logIn(formData)
            localStorage.setItem('userToken', token)
        } else {
            const {token} = await signUp(formData)
            localStorage.setItem('userToken', token)
        }
        // redirect to the home page after the signup/login
        navigate('/home')
    }



    return (
        <div className="flex items-center justify-center h-screen">
            <div className="border-blue-600 border-2 p-4">
                <h2 className="text-3xl mb-5">{actionText}</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="text-xl block" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-[45vw] bg-gray-700 rounded-lg text-center p-2"
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
                        <label className="text-xl block" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-[45vw] bg-gray-700 rounded-lg text-center p-2"
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
                        <button type="submit"
                            className="bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-900 m-2">
                                {actionText}
                            </button>
                    </div>
                </form>
            </div>
        </div>
    )
}