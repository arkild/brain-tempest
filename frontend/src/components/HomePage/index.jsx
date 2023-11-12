import Listing from '../Listing'

export default function HomePage(props) {
    return (
    <>
        <h1>BrainTempest</h1>
        <p>Check out these {props.ideas.length} ideas our users have stormed up!</p>
        <Listing ideas={props.ideas} setDetailsData={props.setDetailsData} />
    </>
    )
}