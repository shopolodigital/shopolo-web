import React from 'react'
import "./HowWeWork.scss"
// images
import Signup from "../../../static/HowWeWorkRes/signup.svg"
import Verified from "../../../static/HowWeWorkRes/verified.svg"
import Upload from "../../../static/HowWeWorkRes/upload.svg"
import Relax from "../../../static/HowWeWorkRes/relax.svg"

const HowWeWork = () => {
    const data = [
        {
            "img": Signup,
            "head": "SIGN UP",
            "desc": "Sign up as an\nartist or label."
        },
        {
            "img": Verified,
            "head": "GET VERIFIED",
            "desc": "We will verify you for\nfurther processing."
        },
        {
            "img": Upload,
            "head": "UPLOAD TRACK",
            "desc": "Upload through\nwebsite/email."
        },
        {
            "img": Relax,
            "head": "RELAX",
            "desc": "Submit your song.\nWe’ll handle the rest!"
        }
    ]
    return (
        <div className="HowWeWorkContainer">
            <p className="Heading">How We Work</p>
            <div className="DetailsContainer">
                {data.map(x => (
                    <div key={x.head}>
                        <img src={x.img} alt={x.head} />
                        <p className="Title">{x.head}</p>
                        <p className="Description">{x.desc.split("\n").map(x => <span>{x}<br/></span>)}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HowWeWork
