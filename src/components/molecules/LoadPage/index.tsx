import React from 'react'
import { motion } from "framer-motion"
import style from "./loadpage.module.scss"
export const LoadPage: React.FC = () => {
    return (
        <motion.section className={style.container} initial={{ scaleX: 1 }} exit={{ scaleX: 0 }} transition={{ duration: 1, delay: 0.5, ease: "circIn", }}>
            <div className={style.loadingText}>
                <motion.span initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }} transition={{ duration: 0.5 }}>Loading</motion.span>
            </div>
            <div className={style.lineLoad}>
                <motion.span className={style.lineDefault} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 2.5, ease: 'circOut' }}></motion.span>
            </div>
        </motion.section>
    )
}
