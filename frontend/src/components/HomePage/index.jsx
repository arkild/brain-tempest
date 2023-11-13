import Listing from '../Listing'
import {useEffect} from 'react'

export default function HomePage(props) {
    useEffect(() => {

        //Define an async function to JSONify the query response
        //The getData function that's going to be used will not be pulling the API - instead, it's going to be pulling the data from the DB.
        async function getData() {
          const res = await fetch('/db/ideas')
          //In our class APIs, we'd need to deconstruct the data, but I don't need to do that as my data is already in the form I need.
          const data = await res.json()
          props.setIdeas(data)
        }
    
        //Call the async function
        //This URL is providing the app with the list of ideas created for the database
        getData()
      }, [])
    return (
    <>
        <p className="text-3xl p-4 text-center">Check out these {props.ideas.length} ideas that our users have <i className="text-yellow-400">stormed</i> up!</p>
        <Listing ideas={props.ideas} setDetailsData={props.setDetailsData} />
    </>
    )
}