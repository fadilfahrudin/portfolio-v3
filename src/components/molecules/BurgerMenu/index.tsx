import React, { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, Variants } from "framer-motion";
import style from "./BurgerMenu.module.scss"
import { useAppDispatch, useAppSelector } from "../../../utils/reduxHooks";
import { setBurgerOpen, setBurgerVisible } from "../../../redux/slice/burgerMenuSlice";
import { useFormattedDate } from "../../../utils/useFormattedDate";
import { useFormattedTime } from "../../../utils/useFormattedTime";
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
const BurgerMenu: React.FC = () => {
    const { isBurgerVisible, isBurgerOpen } = useAppSelector((state) => state.burgerMenu)
    const getDate = useFormattedDate("DD MMM")
    const getTime = useFormattedTime({ includeSecond: true, zone: 'WIB' })
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


    const variant: Variants = {
        initial: {
            y: 250
        },
        open: (i) => ({
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5
            }
        }),
        close: {
            y: -250
        }
    }
    return (
        <>
            <AnimatePresence>
                {isBurgerVisible &&
                    <motion.div className={style.burgerMenu}>
                        <motion.button type="button" onClick={() => dispatch(setBurgerOpen(!isBurgerOpen))} className={style.burgerMenuIcon} initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ duration: 0.5, ease: "circOut" }} >
                            <motion.span initial={{ y: -5 }} animate={isBurgerOpen ? { rotate: 45, y: 1 } : { rotate: 0, y: -5 }} transition={{ duration: 0.3, ease: "easeInOut" }} className={style.line}></motion.span>
                            <motion.span initial={{ y: 5 }} animate={isBurgerOpen ? { rotate: -45, y: -1 } : { rotate: 0, y: 5 }} transition={{ duration: 0.3, ease: "easeInOut" }} className={style.line}></motion.span>
                        </motion.button>
                    </motion.div>
                }
            </AnimatePresence>


            <AnimatePresence>
                {isBurgerOpen &&
                    <motion.div className={style.burgerMenuContainer} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
                        <motion.div className={style.burgerMenuContent} initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: 0.5, ease: "easeInOut" }}>
                            <div className={style.burgerMenuList}>
                                {
                                    menu.map((nav, i) => (
                                        <Link key={i} to={nav.link} className={style.burgerMenuLink}>
                                            <i className={`ic ${style.icArrow}`}></i>
                                            <motion.span custom={i} initial="initial" animate="open" exit="close" variants={variant}>{nav.name.toUpperCase()}</motion.span>
                                        </Link>
                                    ))
                                }
                            </div>
                            <div className={style.burgerMenuFooter}>
                                <div className={style.burgerMenuCopyright}>
                                    <motion.span>©2024</motion.span>
                                    <motion.span>FADIL FAHRUDDIN</motion.span>
                                </div>
                                <div className={style.burgerMenuLocalTime}>
                                    <motion.span>LOCAL TIME</motion.span>
                                    <motion.span>{getDate}|{getTime}</motion.span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}

export default memo(BurgerMenu)