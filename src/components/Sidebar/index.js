import React from 'react'
import "./Sidebar.scss"
import { Link as LinkS } from "react-scroll";

const Sidebar = ({isOpen}) => {
    return (
        <>
            <aside className={"sidebarParent" + (isOpen ? " isOpen" : "")}>
                <ul className="NavMenuMobile">
                    <li className="NavItemMobile">
                        <LinkS className="NavLinksMobile active" to="/">HOME</LinkS>
                    </li>
                    <li className="NavItemMobile">
                        <LinkS className="NavLinksMobile" to="/service">SERVICE</LinkS>
                    </li>
                    <li className="NavItemMobile">
                        <LinkS className="NavLinksMobile" to="/blog">BLOG</LinkS>
                    </li>
                    <li className="NavItemMobile">
                        <button className="NavButtonMobile NavLinksMobile">SIGN UP</button>
                    </li>
                </ul>
            </aside>
        </>
    )
}

export default Sidebar
