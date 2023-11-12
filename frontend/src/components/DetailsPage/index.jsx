import FeedbackSection from "../FeedbackSection"

//Depending on where I get this data, sometimes I'll have to deconstruct it using {}, and sometimes I don't. It's weird but if it works, it works.
export default function DetailsPage(idea) {
    return (
        <>
        <div>
            <h1>{idea.name}</h1>
            <img src={idea.image} />
            <p>Problem: {idea.problem}</p>
            <p>Features: {idea.features}</p>
            <p>What do you need help with? {idea.needHelp}</p>
        </div>
        <FeedbackSection ideaId={idea._id} />
        </>
    )
}