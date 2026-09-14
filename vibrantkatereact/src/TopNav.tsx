import React from "react"
import Navlist from "./navlist.tsx";


function TopNav() {
const [nav, setNav] = React.useState<boolean>(false);

const onNavToggle = () => setNav(p => !p);
  return (
    <>
     <nav role='button' id="rainbarB" className="navbutton" onClick={onNavToggle}>
        <div id="rainbarA" className="rainbow topnav">
            <h1 style={{marginTop: 3}}>
                ☰
            </h1>

            <div>
     {nav && <Navlist/>}
    </div>
        </div>
    </nav>
    </>
  )
}

export default TopNav