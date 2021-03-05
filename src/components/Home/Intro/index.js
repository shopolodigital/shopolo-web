import React from 'react'
import "./Intro.scss"
import IntroImage from "../../../static/IntroImage.svg";

const Intro = () => {
    return (
        <div className="container">
            <div className="DetalsContainer">
                <div className="Text">
                    <p className="Heading">Distribute Your Music <br/> Everywhere For Free</p>
                    <p className="Body">
                        <b>Hey there! This is Shopolo Music.</b><br/>
                        One of the best and recommended music distribution platforms <br/> for individual creators and labels.
                    </p>
                    <button className="SignUpButton">SIGN UP</button>
                </div>
            </div>
            <div className="ImageContainer">
                <img src={IntroImage} alt="Welcome"/>
            </div>
            <div className="circularGrad1"/>
            <div className="circularGrad2"/>
        </div>
    )
}

export default Intro
