import Card from '../Card'

export default function Listing({ideas, setDetailsData}) {
    //Starting text display value for the listings
    let listingList = <p>Loading ideas.</p>

    //Load up the content conditionally once the fetch has been performed.
    if (ideas.length > 0) {
        listingList = ideas.map((idea, i) => <Card key={i} idea={idea} setDetailsData={setDetailsData} />)
    }
    return (
        <div className="listing">
            {listingList}
        </div>
    )
}