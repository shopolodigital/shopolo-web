import React from 'react'
import {FaBars} from 'react-icons/fa';
import "./Navbar.scss";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import logo from "../../static/logo.png"
import logoText from "../../static/logo_text.png"

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="NavBarContainer">
                    <LinkR to="/" className="NavLogo" alt="logo">
                        <img src={logo} id="logoImg" alt="logo" />
                        <img src={logoText} id="logoText" />
                    </LinkR>
                    <div className="MobileIcon">
                        <FaBars />
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
