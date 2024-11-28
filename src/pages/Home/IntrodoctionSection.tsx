import React, { memo } from 'react'
import Marquee from '../../components/atomic/Marquee'
import { NavigationHome } from './NavigatIonHome'
import {  motion } from 'framer-motion';
import { useAppSelector } from '../../utils/reduxHooks';

export const IntrodoctionSection: React.FC = memo(() => {
    const { isFirstLoad } = useAppSelector(state => state.loadingSlice)

    const variants = {
        hidden: { x: 400 },
        visible: (i: number) => ({ x: 0, transition: { delay: i * 0.3, duration: 0.3, type: "spring", stiffness: 20 } }),
    }

    return (
        <div className='introduction__home'>
            <motion.div initial={{y:100, opacity:0}} animate={!isFirstLoad && {y:0, opacity:1}} transition={{duration: 0.5, delay: 1, ease:'circOut'}}>
                <NavigationHome />
            </motion.div>
            <Marquee>
                {(lineGap) => (
                    <>
                        <span>Latest project: &nbsp; <b>iNews.id</b></span>
                        {lineGap}
                    </>
                )}
            </Marquee>
            <div className='myName'>
                <motion.span initial="hidden" animate={!isFirstLoad && "visible"} variants={variants} custom={1}>F</motion.span>
                <motion.span initial="hidden" animate={!isFirstLoad && "visible"} variants={variants} custom={2}>A</motion.span>
                <motion.span initial="hidden" animate={!isFirstLoad && "visible"} variants={variants} custom={3}>D</motion.span>
                <motion.span initial="hidden" animate={!isFirstLoad && "visible"} variants={variants} custom={4}>I</motion.span>
                <motion.span initial="hidden" animate={!isFirstLoad && "visible"} variants={variants} custom={5}>L</motion.span>
            </div>
            <motion.p initial={{opacity:0}} animate={!isFirstLoad && {opacity:1}} transition={{duration: 1, delay: 1.5 ,ease:'circIn'}} className='myDesc'>is my name. I can translate something digital problem into an application simply but not reduce the desired needs, elegantly, and responsive. and now I am available as a freelancer to help you.</motion.p>
        </div>
    )
})
