import React from 'react'
import style from "./errorStyle.module.scss"
import image from "../../assets/img/development.png"
import { AnimatePresence, motion } from "framer-motion"
import { useAppSelector } from '../../utils/reduxHooks'
const PageNotFound: React.FC = () => {
    const { isFirstLoad } = useAppSelector(state => state.loadingSlice)
    const variant = {
        hidden: {
            opacity: 0,
            y: 100
        },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.5,
                duration: 0.5,
                ease: "easeInOut"
            }
        })
    }

    return (
        <AnimatePresence>
            <main className={style.container}>
                <motion.section className={style.PageNotFound}>
                    <motion.h1 variants={variant} initial="hidden" animate={!isFirstLoad && "visible"} custom={1}>404 Error. :( </motion.h1>
                    <motion.p variants={variant} initial="hidden" animate={!isFirstLoad && "visible"} custom={2}>The page you’re looking for does not exist.</motion.p>
                    <a href='/' >
                        <motion.span variants={variant} initial="hidden" animate={!isFirstLoad && "visible"} custom={4}>
                            Feel free to explore other pages or contact us for more information.
                            <i className={`ic ${style.icArrow}`}></i>
                        </motion.span>
                    </a>
                    <img src={image} alt="under development" width={"100%"} height={"100%"} loading='lazy' />
                </motion.section>
            </main>
        </AnimatePresence>
    )
}

export default PageNotFound