import './styles.css'
import {useState, useEffect} from 'react'
import {Routes, Route, Link} from 'react-router-dom'
// This line below isn't needed since we moved the listing rendering to the HomePage component.
// import Listing from '../Listing'
import DetailsPage from '../DetailsPage'
import NotFoundPage from '../NotFoundPage'
import HomePage from '../HomePage'

function App() {
  // Store the data from the backend here
  const [ideas, setIdeas] = useState([])
  // This is for lifting state from the details on the ideas.
  const [detailsData, setDetailsData] = useState({})
  useEffect(() => {

    //Define an async function to JSONify the query response
    //The getData function that's going to be used will not be pulling the API - instead, it's going to be pulling the data from the DB.
    async function getData() {
      const res = await fetch('http://localhost:3000/ideas')
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
    <Routes>
      <Route path="/" element={<HomePage ideas={ideas} setDetailsData={setDetailsData}/>}/>
      <Route path="/details" element={<DetailsPage {...detailsData} />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
    </>
  )

}

export default App