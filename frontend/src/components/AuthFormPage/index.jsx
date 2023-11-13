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
            localStorate.setItem('userToken', token)
        }
        // redirect to the home page after the signup/login
        navigate('/home')
    }



    return (
        <div>
            <div>
                <h2 className="">{actionText}</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="" htmlFor="email">
                            Email
                        </label>
                        <input
                            className=""
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
                        <label className="" htmlFor="password">
                            Password
                        </label>
                        <input
                            className=""
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
                            className="">
                                {actionText}
                            </button>
                    </div>
                </form>
            </div>
        </div>
    )
}