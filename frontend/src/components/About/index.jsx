import { Link } from "react-router-dom"

export default function About() {
    return (
        <>
        <div class="flex flex-col items-center justify-center">
        <h1 className="text-4xl mt-[4rem] text-center">Why <span className="text-blue-400">BrainTempest?</span><br/></h1>
        <div className="mt-[2rem] text-center w-2/3 lg:w-1/3 px-4">
        <p className="text-lg">This project was created as my Capstone project for my Software Engineering bootcamp to demonstrate my proficiency with MERN-stack applications. However, as the project required me to come up with my own idea, I was at a loss for what to make and was stuck with no ideas for the longest time.</p>
        <br/>
        <p className="border-orange-500 border-b text-lg">As a somewhat meta joke, the problem I solved was my own: a community brainstorming/feedback app that allowed people to share their ideas and receive feedback on how to improve their ideas or build off of what they have. The thumbnails you see on the listings are actual screenshots of the applications I made throughout my 12-week bootcamp at General Assembly and serves as a little bit of a trip down memory lane for me.</p>
        <p className="text-md"><i>(You may notice that the thumbnails all look pretty similar to each other in design. Considering what I did for this project, it should be clear how empty the glass of creative juices was for me.)</i></p>
        </div>
        <div class="">
        <Link to="/home"><button class="bg-purple-800 text-white py-2 px-4 rounded-lg hover:bg-purple-900 mt-4">
            Cool, I guess
        </button></Link>
        </div>
        </div>
        </>
    )
}