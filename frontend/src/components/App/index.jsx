import './styles.css'
import {useState, useEffect} from 'react'
import TestPage from '../TestPage'

function App() {
  // Store the data from the backend here
  const [ideas, setIdeas] = useState([])
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
    <h1>BrainTempest</h1>
    <p>We're successfully pulling {ideas.length} ideas.</p>
    <img src={ideas[1].image}/>
  </>
  )

}

export default App