//This is for the button.
import {Link} from 'react-router-dom'

export default function LandingPage() {
    return (
        <>
        <div class="flex flex-col items-center justify-center">
        <h1 className="text-4xl mt-[4rem] text-center">Hello there!<br/> Welcome to BrainTempest.</h1>
        <div className="text-xl mt-[2rem] text-center w-2/3 lg:w-1/3 px-4">
        <p className="">This website is geared towards those who are lacking in ideas or just need a push in the right direction to figure out what they want to do with their projects. That's where the name comes from. It's like a brain<strong>storm</strong>, but it's <i className="text-yellow-500">stronger.</i></p>
        <br/>
        <p className="border-orange-500 border-b">Now I haven't gotten a lawyer on call to discuss the legality and copyright protection of the people who are working on the ideas that they've posted on this website, so we're just going to go on an honor system and have you agree that you won't be mean and steal any of the ideas within this website by having you click on the button down here to continue. <i>(You can click the links on the navbar above to bypass this button situation, but then I'd silently judge you for doing it.)</i></p>
        </div>
        <div class="">
        <Link to="/home"><button class="bg-purple-800 text-white py-2 px-4 rounded-lg hover:bg-purple-900 mt-4">
            Sounds good; let's go
        </button></Link>
        </div>
        </div>
        </>
    )
}