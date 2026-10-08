import tutoring from "./images/WhatDrivesMyTutoring 2.jpg"

function Tutoring() {
    return (
        <>
            <div className="contentwrapper">
                <h1 className="seg">Tutoring</h1>
                <img src={tutoring} alt="" height={400} />

                <h2>English and creative writing tutoring for home educated children in person (Gloucestershire) and online.</h2>
                <p>Specialising in making punctuation fun for 8-12 year olds and giving teens confidence in their writing (like a whimsical version of Functional Skills).</p>

                <h2>I am:</h2>
                <h3 className="seg">

                    <ul>
                        <li>Kind</li>
                        <li>Adaptable</li>
                        <li>Tongue-in-cheek</li>
                        <li>Eccentric</li>
                    </ul>
                </h3>


                <p className="seg">
                    <br /> My kindness and adaptability suits neurodivergent students and I prefer working with them. <br />
                    <br /> I have experience with autism, ADHD, and dyslexia.<br />
                    <br /> My priority is to hear and develop the student's confidence in their voice more than the formalities of a syllabus.<br />
                    <br /> I invent whimsical creative writing exercises, often adapted to the student's interests. That way they are telling me about things that they enjoy and it feels expansive.<br />
                    <br /> I am happy to savour a small side quest and I set a lighthearted tone.
                </p>
                <h2>
                    A great starting point is my four week Writing Confidence course for those age 11 - 18.
                </h2>
                <h3>In four fortnightly sessions of 90 minutes each, we cover:</h3>
                <ul>
                    <li>Warming up the Imagination</li>
                    <li>Punctuation</li>
                    <li>Editing and brevity</li>
                    <li>Student's choice coaching - applying these skills to a specific piece of writing they want to create/improve</li>
                </ul>
                <p>Cost: £60 per session (£240 total) for 1:1. In-person groups of three to six students are available in Stroud on a Tuesday or Thursday and cost £20 per session (£80 total).</p>

                <h2>Ongoing tutoring also available - please contact me to discuss it.</h2>

            </div>
        </>
    )
}

export default Tutoring;