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
            {imgs.map(x => (
                <div><img src={x} /></div>
            ))}
            <button className="SeeMoreButton">SEE MORE</button>
        </div>
    )
}

export default SeeMore
