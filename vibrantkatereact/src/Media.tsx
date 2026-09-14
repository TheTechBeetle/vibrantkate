import medikate from "./images/Katemedia.jpg"
import face from "./images/Facebooklogo.png"
import instant from "./images/Instagramlogo.png"

function Media() {
    return(
        <>
        <div className="contentwrapper">
            <h1>Media</h1>
        <img src={medikate} alt="VibrantKate" height="100px"
            className="activimg"/>
        <h2 className="seg">Social media</h2>
        <ul>
            <li>
                <a href="https://www.facebook.com/VibrantKate/" target="_blank">
                    <h3>
                        Facebook
                        <img src={face} alt="facebooklogo" width="25px" style={{marginLeft: 10}}/>
                    </h3>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/vibrant_kate/" target="_blank">
                    <h3>
                        Instagram
                        <img src={instant} alt="Instagramlogo" width="25px" style={{marginLeft: 10}}/>
                    </h3>
                </a>
            </li>
        </ul>
        <h2 className="seg">Podcasts</h2>
        <p>Being a podcast guest is fun. So far I have chatted about my experiences approaching life from a quirky
            perspective:</p>
        <ul>
            <li className="seg">
                <p>balancing home education with business</p>
                <a href="https://the-home-earning-podcast.captivate.fm/episode/1">
                    <h3>Comma Chameleon on The Home Earning Podcast</h3>
                </a>
            </li>
            <li className="seg">
                <p>a wedding based on collaboration</p>
                <a href="https://zeno.fm/podcast/aprica/episodes/creating-a-stress-free-wedding/">
                    <h3>Stress-free wedding</h3>
                </a>
            </li>
            <li className="seg">
                <p>and, because people change and marriages aren't always forever, how to split up respectfully.</p>
                <a href="https://amicable.io/how-to-untie-the-knot-amicably-the-divorce-podcast">
                    <h3>Amicable divorce</h3>
                </a>
            </li>
        </ul>
        </div>
        </>
    )
}

export default Media;