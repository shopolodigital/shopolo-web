import React, { useState } from 'react'
import "./Testimonials.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import TestimonialElement from './TestimonialElement'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import { IconContext } from "react-icons";

const Testimonials = () => {
    const [showIndex, setShowIndex] = useState(0)
    const testimonials = [
        {
            "name": "Sam Fisher",
            "img": "https://i.picsum.photos/id/342/2896/1944.jpg?hmac=_2cYDHi2iG1XY53gvXOrhrEWIP5R5OJlP7ySYYCA0QA",
            "desc": "“The voyage you started together to attain your dreams are finally accomplished.I am feeling proud that your ambitious nature and dedication has really paid off!! I also wholeheartedly appreciate your support and effort towards inclusion of our work.”"
        },
        {
            "name": "Samuel Fisher",
            "img": "https://i.picsum.photos/id/342/2896/1944.jpg?hmac=_2cYDHi2iG1XY53gvXOrhrEWIP5R5OJlP7ySYYCA0QA",
            "desc": "“The voyage you started together to attain your dreams are finally accomplished.”"
        },
        {
            "name": "John Doe",
            "img": "https://i.picsum.photos/id/342/2896/1944.jpg?hmac=_2cYDHi2iG1XY53gvXOrhrEWIP5R5OJlP7ySYYCA0QA",
            "desc": "“The voyage you started together to attain your dreams are finally accomplished.I am feeling proud that your ambitious nature.”"
        }
    ]

    return (
        <div>
            <div className="TestimonialHolder">
                <p className="Heading" >It's the matter of showing love.</p>
                <div className="Desktop">
                    <div className="Testimonials">
                        <div className={"TestimonialBtn Prev " + (showIndex === 0 && "Deactivate")} onClick={() => showIndex > 0 && setShowIndex(showIndex - 1)}>
                            <IconContext.Provider value={{ className: "ArrowIcon" }}><FaArrowLeft/></IconContext.Provider>
                        </div>
                        {testimonials.map((x, pos) => <TestimonialElement name={x.name} img={x.img} desc={x.desc} key={x.name} hide={pos !== showIndex}/>)}
                        <div 
                        className={"TestimonialBtn Next " + (showIndex === (testimonials.length - 1) && "Deactivate")} 
                        onClick={() => showIndex < (testimonials.length - 1) && setShowIndex(showIndex + 1)}>
                            <IconContext.Provider value={{ className: "ArrowIcon" }}><FaArrowRight/></IconContext.Provider>
                        </div>
                    </div>
                </div>
                <div className="Mobile">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={(swiper) => setShowIndex(swiper.realIndex)}
                        onSwiper={(swiper) => console.log(swiper)}>
                        {testimonials.map((x, pos) => 
                            <SwiperSlide className="Swiper" key={x.name}>
                                <TestimonialElement name={x.name} img={x.img} desc={x.desc} key={pos} hide={false}/>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
                <div className="Dots">
                    {[...testimonials.keys()].map(x => (
                        <div className={"Dot " + (x === showIndex && "Active")} key={x}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials
