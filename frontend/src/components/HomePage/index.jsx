import Listing from '../Listing'

export default function HomePage(props) {
    return (
    <>
        <p className="text-3xl p-4 text-center">Check out these {props.ideas.length} ideas that our users have <i className="text-yellow-400">stormed</i> up!</p>
        <Listing ideas={props.ideas} setDetailsData={props.setDetailsData} />
    </>
    )
}