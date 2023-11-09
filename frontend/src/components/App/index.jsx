import './styles.css'
import {useEffect} from 'react'

function App() {
  //Query the database on component mount
  useEffect(() => {

    //Define an async function to JSONify the query response
    //The getData function that's going to be used will not be pulling the API - instead, it's going to be pulling the data from the DB.
    async function getData() {
      const res = await fetch('https://localhost:3000/')
      const ideas = await res.json()
      console.log(ideas)
    }

    //Call the async function
    getData()
  }, [])


  return <h1>BrainTempest</h1>

}

export default App