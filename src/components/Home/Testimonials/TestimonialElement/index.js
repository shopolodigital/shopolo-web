import React from 'react'
import "./TestimonialElement.scss"

const TestimonialElement = (props) => {
    const { name, img, desc } = props;
    return (
        <div className={(props.hide ? "Hide" : "Parent")}>
            <div className="MidSection">
                <p className="Description">{desc}</p>
                <div className="Who">
                    <img className="ProfilePic" src={img} alt="profpic" />
                    <p><b>{name}</b><br/>Director/ Editor at 21 Century Savage</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialElement
