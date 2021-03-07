import React from 'react'
import "./SeeMore.scss"
// images
import Spotify from "../../../static/ServiceResources/Spotify.png"
import JioSaavn from "../../../static/ServiceResources/JioSaavn.png"
import WynkMusic from "../../../static/ServiceResources/Wynkmusic.png"
import AppleMusic from "../../../static/ServiceResources/AppleMusic.png"
import Gaana from "../../../static/ServiceResources/Gaana.png"
import AmazonMusic from "../../../static/ServiceResources/AmazonMusic.png"
import Hungama from "../../../static/ServiceResources/Hungama.png"
import {FaArrowRight} from 'react-icons/fa'
import { IconContext } from "react-icons";

const SeeMore = () => {
    const imgs = [
        Spotify,
        JioSaavn,
        WynkMusic,
        AppleMusic,
        Gaana,
        AmazonMusic,
        Hungama
    ]
    return (
        <div className="SeeMoreContainer">
            {imgs.map((x, i) => (
                <div key={i}><img src={x} alt={i}/></div>
            ))}
            <div>
                <div className="SeeMoreButton">
                    <IconContext.Provider value={{ className: "NextIcon" }}><FaArrowRight/></IconContext.Provider>
                </div>
            </div>
        </div>
    )
}

export default SeeMore
