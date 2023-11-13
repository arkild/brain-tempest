import {useState, useEffect} from 'react'
import {Routes, Route, Link} from 'react-router-dom'
// This line below isn't needed since we moved the listing rendering to the HomePage component.
// import Listing from '../Listing'
import DetailsPage from '../DetailsPage'
import NotFoundPage from '../NotFoundPage'
import HomePage from '../HomePage'
import About from '../About'
import LandingPage from '../LandingPage'
import AuthFormPage from '../AuthFormPage'
import IdeaPage from '../IdeaPage'

function App() {
  // Store the data from the backend here
  const [ideas, setIdeas] = useState([])
  // This is for lifting state from the details on the ideas.
  const [detailsData, setDetailsData] = useState({})
  useEffect(() => {

    //Define an async function to JSONify the query response
    //The getData function that's going to be used will not be pulling the API - instead, it's going to be pulling the data from the DB.
    async function getData() {
      const res = await fetch('/db/ideas')
      //In our class APIs, we'd need to deconstruct the data, but I don't need to do that as my data is already in the form I need.
      const data = await res.json()
      setIdeas(data)
    }

    //Call the async function
    //This URL is providing the app with the list of ideas created for the database
    getData()
  }, [])


  return (
    <>
      <nav className="bg-gray-800 shadow-lg border-b-[6px]">
        <div>
          <Link to="/home">
            <h2 className="text-white font-bold text-2xl mt-4 ml-6 hover:text-blue-400">BrainTempest</h2>
          </Link>
        </div>
        <div className="flex-grow">
        <ul className="flex justify-end text-lg font-medium">
        <li>
          <Link to="/about">
            <h4 className="text-white hover:text-yellow-500 hover:text-xl font-bold px-2">About us</h4>
          </Link>
        </li>
        <li>
          <Link to="/create">
            <h4 className="text-white hover:text-yellow-500 hover:text-xl font-bold px-2">Create Idea</h4>
          </Link>
        </li>
        <li>
          <Link to="/auth/signup">
            <h4 className="text-white hover:text-yellow-500 hover:text-xl font-bold px-2">Sign Up</h4>
          </Link>
        </li>
        <li>
          <Link to="/auth/login">
            <h4 className="text-white hover:text-yellow-500 hover:text-xl font-bold px-2">Log In</h4>
          </Link>
        </li>
        </ul>
        </div>
      </nav>
    <Routes>
      {/* Default route will go to the Landing Page. */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage ideas={ideas} setDetailsData={setDetailsData}/>}/>
      <Route path="/details" element={<DetailsPage {...detailsData} />} />
      <Route path="/about" element={<About />} />
      <Route path="/auth/:formType" element={<AuthFormPage />}/>
      <Route path="/create" element={<IdeaPage />}/>
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
    </>
  )

}

export default App