import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import "../../src/components/layout.css"

const Destinations = () => (
    <Layout>
        <Seo title="About" />
        <div className="about">
            <h1>About Myself</h1>
            <p>My name is Munkhkhuleg Tserenpurev. <br></br>
                I'm an aspiring sophomore student who is majoring in Human-Computer Interaction at Whitworth University. <br></br>
                I love to take photos and make videos in my free time. <br></br>
                I would like to share some of the photos that I took over 5 years. <br></br>
                Feel free to contact me on my socials!
            </p>
        </div>
    </Layout>
)

export default Destinations