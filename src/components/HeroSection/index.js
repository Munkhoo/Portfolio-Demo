import React from 'react'
import { Button } from '../ButtonElements'
import "./HeroSection.css"

function HeroSection() {
    return (
        <div className="hero-container">
            <h1>Munkhkhuleg Tserenpurev</h1>
            <p>Welcome to my Portfolio Website</p>
            <div className="hero-btns">
                <Button fontBig big primary>Get Started</Button>
            </div>
        </div>
    )
}

export default HeroSection