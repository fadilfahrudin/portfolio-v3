import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from './horizontal-scroll.module.scss'

interface Props {
    children: React.ReactNode
    widthSection: number
    scrollLength: number
}

const HorizontalScroll = ({ children, widthSection, scrollLength }: Props) => {
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })
    const x = useTransform(scrollYProgress, [0, 1], ['0vw', `-${scrollLength}vw`]);

    return (
        <motion.section ref={targetRef} className={styles.horizontalScrollContainer} style={{ height: `${widthSection}vh` }}>
            <motion.div className={styles.horizontalScrollSection}>
                <motion.div style={{ x, display: 'flex' }}>
                    {children}
                </motion.div>
            </motion.div>
        </motion.section >
    )
}


export default HorizontalScroll