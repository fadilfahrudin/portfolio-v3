import React, { memo } from "react";
import { Link } from "react-router-dom";
const menu = [
    {
        name: "about",
        link: "/about"
    },
    {
        name: "projects",
        link: "/projects"
    },
    {
        name: "contact",
        link: "/contact"
    },
]

export const NavigationHome: React.FC = memo(() => {
    return (
        <nav className="nav__home">
            {menu.map((nav, i) => (
                <Link key={i} to={nav.link} className="navLink">{nav.name.toUpperCase()} <i className="ic ic-arrow"></i></Link>
            ))}
        </nav>
    )
})