import inkadot from "./images/Inka Dot Front Cover updated (1).jpg"

function Inkadot() {
    return(
        <>
        <div className="contentwrapper">
            <h1>Inka Dot's Pet Full Stop</h1>
            <img src={inkadot} alt="InkaDot" width="200" height="250"
                className="activimg"/>
            <p>Inka Dot's Pet Full Stop makes punctuation fun!</p>
            <p>Share Inka Dot's adventures with living ink as</p>
            <p>she works towards her Pet Care badge.</p>
            <br/>
            <p>Traditionally grammar is dry and rule-based,</p>
            <p>which is often off-putting. The zine adds a story</p>
            <p>personifies punctuation and features cute</p>
            <p>illustrations. A zine is a quirky artistic booklet</p>
            <p>the name is an abbreviation of 'magazine'.</p>
            <br/>
            <p>Each page is correctly punctuated so it is an</p>
            <p>accurate reference guide, allowing readers to</p>
            <p>absorb the usage without feeling lectured at. My</p>
            <p>aim is to open the door to punctuation, so that</p>
            <p>when people have approached it playfully and</p>
            <p>seen how different marks are used they can</p>
            <p>explore it further. The text is in a dyslexia-</p>
            <p>friendly font (Verdana) to enhance accessibility.</p>
            <br/>
            <p>Environmental awesomeness is important to</p>
            <p>me, so the A5 booklet is professionally printed</p>
            <p>by a local company that uses green electricity,</p>
            <p>water-based inks and donates to The Woodland Trust.</p>
            <br/>
            <p>This zine is: cheerful, accurate, beautiful, quirky and essential!</p>
            <h2>
                <a href="https://vibrantkate.kit.com/0eb0b50e46" target="_blank">
                    Sign up for my email list
                </a>
                to receive the story electronically
            </h2>
            <a href="https://vibrantkate.sumupstore.com" target="_blank">
                <h2>Now available in printed form!</h2>
            </a>
        </div>
        </>
    )
}

export default Inkadot;