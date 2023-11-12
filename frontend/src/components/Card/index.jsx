export default function Card ({idea, setDetailsData}) {
    return (
        <figure onClick={() => setDetailsData(idea)}>
            <img src={idea.image} />
            <figcaption>
                <h1>{idea.name}</h1>
            </figcaption>
        </figure>
    )
}