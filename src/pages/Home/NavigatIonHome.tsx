import React, { memo } from "react";
import { NavLink } from "react-router-dom";
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
    return (
        <nav className="nav__home">
            {menu.map((nav, i) => (
                <NavLink key={i} to={nav.link} className="navLink">{nav.name.toUpperCase()}</NavLink>
            ))}
        </nav>
    )
})