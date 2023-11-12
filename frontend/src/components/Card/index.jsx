//My links didn't work. I forgot to put this line in below to ensure that the links worked.
import {Link} from 'react-router-dom'

export default function Card ({idea, setDetailsData}) {
    return (
        <Link to={"/details"} onClick={() => setDetailsData(idea)}>
        <figure>
            <img src={idea.image} />
            <figcaption>
                <h1>{idea.name}</h1>
            </figcaption>
        </figure>
        </Link>
    )
}