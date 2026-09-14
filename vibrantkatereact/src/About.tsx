import vibimg from "./images/vibrantkate.jpg"
import buycoffeelogo from "./images/buycoffeelogo.jpg"

function About() {
    return(
        <>
        <div className="contentwrapper">
            <h1 className="seg">About Me</h1>
        <p>VibrantKate as a brand epitomises shared energy and inspiration.</p>
        <p>I like encouraging people to think creatively through their writing.</p>
        <p>I love teaching people to laugh for no reason and watch the group's joy expand.</p>
        <p>I think learning should be through play and visual fun; I enliven traditionally dull concepts through
            pictures and puns.</p>
        <p>My BA in English and MA in Modern and Contemporary Writing from Loughborough University gave me a </p>
        <p>great academic grounding; my Queen's Guide award developed my organisational skills; becoming a parent
        <p>introduced me to the freedom and fun of home education.</p>
        </p>
        <img src={vibimg} alt="kate" width="300" height="300"
            className="activimg"/>
        <br/>
        <h1>Contact me</h1>
        <p>Sign up for my email list <a href="https://vibrantkate.kit.com/0eb0b50e46" target="_blank">here</a>, or find
            me on my <a href="media.html">social networks</a>. Look forward to connecting!
        </p>
        <br/>
        <a href={"https://buymeacoffee.com/vibrantkate"} target="_blank">
            <img src={buycoffeelogo} alt="buycoffeelogo" height="170"
                className="activimg"/>
        </a>
        <h1 className="seg">Support me</h1>
        <p>If you're excited about helping me towards financial independence without buying a product or </p>
        service, you can use <a href="https://buymeacoffee.com/vibrantkate" target="_blank">this site</a> to give a
        one-off donation or join a monthly
        <p>membership. It makes a huge difference! Thanks for using your money to bring joy!</p>
        </div>
        </>
    )
}

export default About;