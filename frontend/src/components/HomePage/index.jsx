import Listing from '../Listing'

export default function HomePage(props) {
    return (
    <>
        <p>Check out these {props.ideas.length} ideas our users have stormed up!</p>
        <Listing ideas={props.ideas} setDetailsData={props.setDetailsData} />
    </>
    )
}