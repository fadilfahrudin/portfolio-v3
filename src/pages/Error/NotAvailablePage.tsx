import React from 'react'
import style from "./errorStyle.module.scss"
import { Link } from 'react-router-dom'
import image from "../../assets/img/development.png"
import { motion } from "framer-motion"
const NotAvailablePage: React.FC = () => {

    const variant = {
        hidden: {
            opacity: 0,
            y: 100
        },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
                ease: "easeInOut"
            }
        })
    }

    return (
        <main className={style.container}>
            <motion.section className={style.NotAvailablePage}>
                <motion.h1 variants={variant} initial="hidden" animate="visible" custom={1}>Oops! Page Not Available Yet</motion.h1>
                <motion.p variants={variant} initial="hidden" animate="visible" custom={2}>Don’t worry, something amazing is on the way! </motion.p>
                <Link to="/">
                    <motion.span variants={variant} initial="hidden" animate="visible" custom={4}>
                        Feel free to explore other pages or contact us for more information.
                        <i className={`ic ${style.icArrow}`}></i>
                    </motion.span>
                </Link>
                <img src={image} alt="under development" width={"100%"} height={"100%"} loading='lazy' />
            </motion.section>
        </main>
    )
}

export default NotAvailablePage