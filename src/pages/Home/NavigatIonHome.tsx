import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import useResponsive from "../../utils/useResponsive";
import { motion } from "framer-motion";
const menu = [
    {
        name: "about",
        link: "/"
    },
    {
        name: "projects",
        link: "/"
    },
    {
        name: "contact",
        link: "/"
    },
]
export const NavigationHome: React.FC = memo(() => {
    const isMobile = useResponsive('(max-width: 1023px)')

    if (isMobile) {
        return (
            <div className="burger-menu__home">
                <span>Logo</span>
                <motion.span className="burger-menu-icon"></motion.span>
            </div>
        )
    }

    return (
        <nav className="nav__home">
            {menu.map((nav, i) => (
                <NavLink key={i} to={nav.link} className="navLink">{nav.name.toUpperCase()} <i className="ic ic-arrow"></i></NavLink>
            ))}
        </nav>
    )
})