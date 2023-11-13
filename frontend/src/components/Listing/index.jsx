import Card from '../Card'

export default function Listing({ideas, setDetailsData}) {
    //Starting text display value for the listings
    let listingList = <p>Loading ideas.</p>

    //Load up the content conditionally once the fetch has been performed.
    if (ideas.length > 0) {
        listingList = ideas.map((idea, i) => <Card key={i} idea={idea} setDetailsData={setDetailsData} />)
    }
    return (
        <div className="listing p-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 place-items-center">
            {listingList}
        </div>
    )
}