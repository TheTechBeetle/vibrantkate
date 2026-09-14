import React from "react"
import Navlist from "./navlist.tsx";
import { Link } from "react-router";

function TopNav() {
const [nav, setNav] = React.useState<boolean>(false);
const onClickHomeLink: React.MouseEventHandler = (e) => e.stopPropagation();
const onNavToggle = () => setNav(p => !p);
  return (
    <>
     <nav role='button'className="navbutton" onClick={onNavToggle}>
        <div className="rainbow topnav">
            <h1 style={{marginTop: 3}}>
                ☰ <Link to="/" onClick={onClickHomeLink}>🏡Home</Link>
            </h1>
        </div>
        {nav && <Navlist/>}
    </nav>
    </>
  )
}

export default TopNav