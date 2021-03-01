import React, { useState } from 'react'
import "./Navbar.scss";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import logo from "../../static/logo.png"
import logoText from "../../static/logo_text.png"
import Sidebar from "../../components/Sidebar"

const Navbar = () => {
    const [openMobile, setOpenMobile] = useState(false)
    return (
        <>
            <Sidebar isOpen={openMobile} /> 
            <nav>
                <div className="NavBarContainer">
                    <LinkR to="/" className="NavLogo" alt="logo">
                        <img src={logo} id="logoImg" alt="logo" />
                        <img src={logoText} id="logoText" alt="logo"/>
                    </LinkR>
                    <div className="MobileIcon" onClick={() => setOpenMobile(!openMobile)}>
                        <div className="hamLine" />
                        <div className={"hamLine" + (openMobile ? " active" : "")} />
                        <div className="hamLine" />
                    </div>
                    <ul className="NavMenu">
                        <li className="NavItem">
                            <LinkS className="NavLinks active" to="/">HOME</LinkS>
                        </li>
                        <li className="NavItem">
                            <LinkS className="NavLinks" to="/service">SERVICE</LinkS>
                        </li>
                        <li className="NavItem">
                            <LinkS className="NavLinks" to="/blog">BLOG</LinkS>
                        </li>
                        <li className="NavItem">
                            <button className="NavButton">SIGN UP</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
