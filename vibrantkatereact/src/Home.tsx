import Activity from "./Activity";
import Vibcastle from "./Vibcastle";
import laughter from "./images/laughteryoga.jpg"
import Inka from "./images/Inka Dot Front Cover updated (1).jpg"
import Me from "./images/vibrantkate.jpg"
import tree from "./images/TreeativeWritingOverview.jpg"
import Shop from "./images/Vibrashop.jpg"
import Social from "./images/Katemedia.jpg"
import Banner from "./Banner";
function Home() {
    return(
        <>
        <div style={{textAlign:"center"}}>
            <Vibcastle/>
            <Banner/>
            <ul className="activitys">
                <Activity name="Laughter sessions" to="Laughter" img={laughter}/>
                <Activity name="Inka Dot's Pet Full Stop" to="Inkadot" img={Inka}/>
                <Activity name="About me, support me & contact me" to="About" img={Me}/>
                <Activity name="Treeative writing & tree hugging" to="treeative" img={tree}/>
                <Activity name="Shop" to="https://vibrantkate.sumupstore.com/" img={Shop}/>
                <Activity name="Social media and podcasts/radio" to="media" img={Social}/>
            </ul>
        </div>
        </>
    )
}

export default Home;