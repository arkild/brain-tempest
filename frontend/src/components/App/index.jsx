import './styles.css'
import {useEffect} from 'react'
import TestPage from '../TestPage'

function App() {
  //Query the database on component mount
  useEffect(() => {

    //Define an async function to JSONify the query response
    //The getData function that's going to be used will not be pulling the API - instead, it's going to be pulling the data from the DB.
    async function getData(url) {
      const res = await fetch(url)
      const ideas = await res.json()
      console.log(ideas)
    }

    //Call the async function
    //This URL is providing the app with the list of ideas created for the database
    getData('http://localhost:3000/ideas')
  }, [])


  return (
  <>
    <h1>BrainTempest</h1>
    <TestPage />
  </>
  )

}

export default App