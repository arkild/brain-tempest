import Card from '../Card'

export default function Listing({ideas}) {
    console.log(ideas.length)
    return (
        <div className="listing">
            {ideas.length > 0 ? ideas.map(idea => <Card key={idea._id} idea={idea} />) : <p>The ideas are loading.</p>}
        </div>
    )
}