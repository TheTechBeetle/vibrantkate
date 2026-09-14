import { Link } from "react-router";

function Navlist() {
    return (
        <>
        <ul className="activimg">
            <li>
                <Link to="/"><h3>Home</h3></Link>
            </li>
            <li>
                <Link to="laughter">Laughter Yoga</Link>
            </li>
            <li>
                <Link to="Inkadot">Inka Dot</Link>
            </li>
            <li>
                <Link to="About" style={{paddingRight:10}}>About, Support & Contact</Link>
            </li>
            <li>
                <Link to="Treeative">Treeative writing</Link>
            </li>
            <li>
                <Link to="media">Media & podcasts</Link>
            </li>
            <li>
                <Link to="https://vibrantkate.sumupstore.com/" target="_null">Shop</Link>
            </li>
        </ul>
        </>
    )
}

export default Navlist;