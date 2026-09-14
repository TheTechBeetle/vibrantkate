import TopNav from "./TopNav";
import {  Outlet,  } from "react-router";
import Bottombar from "./bottombar";

function App() {
  return (
    <>
     <TopNav/>
     <Outlet />
      <Bottombar/>
    </>
  )
}

export default App
