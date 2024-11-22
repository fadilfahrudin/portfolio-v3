import React, { memo, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import style from "./BurgerMenu.module.scss"
import { useAppDispatch, useAppSelector } from "../../../utils/reduxHooks";
import { setBurgerVisible } from "../../../redux/slice/burgerMenuSlice";
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
const BurgerMenu: React.FC = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false)
    const { isBurgerVisible } = useAppSelector((state) => state.burgerMenu)
    const dispatch = useAppDispatch()
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const margin = 200;

        if (currentScrollY + viewportHeight + margin >= documentHeight) {
            // Jika sudah mencapai akhir dokumen, sembunyikan burger menu
            dispatch(setBurgerVisible(false));
        } else if (currentScrollY > 250) {
            // Jika scroll lebih dari 250px, tampilkan burger menu
            dispatch(setBurgerVisible(true));
        } else {
            // Jika tidak, sembunyikan burger menu
            dispatch(setBurgerVisible(false));
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <AnimatePresence>
            {isBurgerVisible &&
                <motion.div className={style.burgerMenu}>
                    <motion.button type="button" onClick={() => setIsBurgerOpen(!isBurgerOpen)} className={style.burgerMenuIcon} initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} >
                        <motion.span initial={{ y: -5 }} animate={isBurgerOpen ? { rotate: 45, y: 1 } : { rotate: 0, y: -5 }} transition={{ duration: 0.3, ease: "easeInOut" }} className={style.line}></motion.span>
                        <motion.span initial={{ y: 5 }} animate={isBurgerOpen ? { rotate: -45, y: -1 } : { rotate: 0, y: 5 }} transition={{ duration: 0.3, ease: "easeInOut" }} className={style.line}></motion.span>
                    </motion.button>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default memo(BurgerMenu)