//My links didn't work. I forgot to put this line in below to ensure that the links worked.
import {Link} from 'react-router-dom'

export default function Card ({idea, setDetailsData}) {
    return (
        <>
        <Link to={"/details"} onClick={() => setDetailsData(idea)}>
            <div className="w-[25rem] h-[25rem] p-3 flex flex-col text-center">
            <div className="bg-orange-800 p-1">
            <figure className="flex flex-col">
                <img className="w-full h-[20rem] object-cover mx-auto max-w-full" src={idea.image} />
                <figcaption className="text-center">
                    <h1 className="italic text-xl bg-blue-900">{idea.name}</h1>
                </figcaption>
            </figure>
            </div>
            </div>
        </Link>
        </>
    )
}