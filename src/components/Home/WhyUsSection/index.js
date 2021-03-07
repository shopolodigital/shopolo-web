import React from 'react'
import "./WhyUs.scss"
// icons
import Globalized from "../../../static/WhyUsResources/globalised.svg"
import ForkLink from "../../../static/WhyUsResources/forklink.svg"
import Royalty from "../../../static/WhyUsResources/royalty.svg"
import Support from "../../../static/WhyUsResources/support.svg"


const WhyUs = () => {
    const data = [
        {
            "img": Globalized,
            "head": "Get Globalized",
            "desc": "We deliver your music to 150+ music streaming sites and retailers across the globe with caller tune facility."
        },
        {
            "img": ForkLink,
            "head": "SmartLink",
            "desc": "Get a free Shopolo Music SmartLink for every new release."
        },
        {
            "img": Royalty,
            "head": "Earn Royalities",
            "desc": "We collect royalties from various platforms and share up to 90% with you."
        },
        {
            "img": Support,
            "head": "Artist Support",
            "desc": "Our support team assists you through every step of the distribution process."
        }
    ]
    return (
        <div className="WhyUsContainer">
            <p className="Heading">Why Us?</p>
            <div className="DetailsContainer">
                {data.map(x => (
                    <div key={x.head}>
                        <img src={x.img} alt={x.head} />
                        <p className="Title">{x.head}</p>
                        <p className="Description">{x.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyUs
