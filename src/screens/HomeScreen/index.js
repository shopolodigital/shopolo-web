import React from 'react'
import Navbar from "../../components/Navbar"
import Intro from "../../components/Home/Intro"
import SeeMore from '../../components/Home/SeeMoreSection'
import WhyUs from '../../components/Home/WhyUsSection'
import Testimonials from '../../components/Home/Testimonials'
import HowWeWork from '../../components/Home/HowWeWork'
import Milestone from '../../components/Home/MilestoneSection'

const HomeScreen = () => {
    return (
        <div>
            <Navbar />
            <Intro />
            <SeeMore />
            <WhyUs />
            <HowWeWork />
            <Testimonials />
            <Milestone />
        </div>
    )
}

export default HomeScreen
