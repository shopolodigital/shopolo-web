import React from 'react'
import "./Testimonials.scss"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import { IconContext } from "react-icons";

const Testimonials = () => {
    return (
        <div className="TestimonialHolder">
            <p className="Heading" >It's the matter of showing love.</p>
            <div className="Testimonials">
                <div className="TestimonialBtn Prev">
                    <IconContext.Provider value={{ className: "ArrowIcon" }}><FaArrowLeft/></IconContext.Provider>
                </div>
                <div className="MidSection">
                    <p className="Description">“The voyage you started together to attain your dreams are finally accomplished.I am feeling proud that your ambitious nature and dedication has really paid off!! I also wholeheartedly appreciate your support and effort towards inclusion of our work.”</p>
                    <div className="Who">
                        <img className="ProfilePic" src="https://i.picsum.photos/id/342/2896/1944.jpg?hmac=_2cYDHi2iG1XY53gvXOrhrEWIP5R5OJlP7ySYYCA0QA" alt="profpic" />
                        <p><b>Sam Fisher</b><br/>Director/ Editor at 21 Century Savage</p>
                    </div>
                </div>
                <div className="TestimonialBtn Next">
                    <IconContext.Provider value={{ className: "ArrowIcon" }}><FaArrowRight/></IconContext.Provider>
                </div>
            </div>
            <div className="TestimonialNavMobile">
                <div>
                    <div className="TestimonialBtn Prev">
                        <IconContext.Provider value={{ className: "ArrowIcon" }}><FaArrowLeft/></IconContext.Provider>
                    </div>
                </div>
                <div>
                    <div className="TestimonialBtn Next">
                        <IconContext.Provider value={{ className: "ArrowIcon" }}><FaArrowRight/></IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
