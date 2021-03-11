import React from 'react'
import "./Priority.scss"
// res
import Artist from "../../../static/PriorityRes/artist.svg"
import Label from "../../../static/PriorityRes/label.svg"

const PrioritySection = () => {
    const data = [
        {
            "img": Artist,
            "text": "ARTIST",
            "route": ""
        },
        {
            "img": Label,
            "text": "LABEL",
            "route": ""
        }
    ]
    return (
        <div className="PriorityHolder">
            <p className="Heading">What's your priority?</p>
            <p className="Subhead">CHOOSE AS PER YOUR INTEREST</p>
            <div className="CategoriesHolder">
                {data.map((x, idx) => (
                    <div key={idx}>
                        <img src={x.img} alt={x.text} /><br/>
                        <button className="Button" >{x.text}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PrioritySection
