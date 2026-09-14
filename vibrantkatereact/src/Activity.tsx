import { Link } from "react-router";

type Props = {
    to: string;
    name: string;
    img: string;
}

function Activity({to, name, img}: Props) {
    return (
        <li className="activity">
            <Link to={to}>
                <img src={img} alt="" height="150"
                className="activimg"/>
                <br/>
                <h3>{name}</h3>
            </Link>
        </li>
    )
}

export default Activity;