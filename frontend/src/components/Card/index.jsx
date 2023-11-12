export default function Card ({idea}) {
    return (
        <figure>
            <img src={idea.image} />
            <figcaption>
                <h1>{idea.name}</h1>
            </figcaption>
        </figure>
    )
}