import { Link } from "react-router";

function Banner() {
    return(
        <>
        <div className="banner">
            <h1>Inspiring:
            joy <Link to="Laughter">(laughter)</Link>
            ; confidence (creative writing tuition)
            and: befriending punctuation <Link to="Inkadot">(Inka Dot's Pet Full Stop)</Link>.
            </h1>
        </div>
        </>
    )
}

export default Banner;