import React from 'react'
import Navbar from "../../components/Navbar"
import Intro from "../../components/Home/Intro"
import SeeMore from '../../components/Home/SeeMoreSection'
import WhyUs from '../../components/Home/WhyUsSection'

const HomeScreen = () => {
    return (
        <div>
            <Navbar />
            <Intro />
            <SeeMore />
            <WhyUs />
        </div>
    )
}

export default HomeScreen
