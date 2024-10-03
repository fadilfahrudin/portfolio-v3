import React, { useRef } from 'react'
import Marquee from '../../components/atomic/Marquee'
import HorizontalScroll from '../../components/molecules/HorizontalScroll'
import "./home.scss";
import { useScroll, useTransform, motion } from 'framer-motion';
const Home: React.FC = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['-4vw', '10vh', '20vh', '60vw']
    })
    const width = useTransform(scrollYProgress, [0, 1], ['15vw', '80vw'])
    return (
        <main id='home'>
            <HorizontalScroll scrollLength={214} widthSection={215}>
                <section className='introSection__home'>
                    <nav></nav>


                    <Marquee>
                        <span>LOCAL TIME &nbsp;<b>07.27 AM UTC/GMT +7 - Saturday, 30 March 2024</b><span className='lineGap'></span><b>STAND WITH PALESTINE</b><span className='lineGap'></span>NEW PROJECT<span className='lineGap'></span></span>
                    </Marquee>
                </section>

                <motion.section className='imageSection__home' style={{ width: width }}>
                    <h1>image</h1>
                </motion.section>

                <motion.section className='imageSection__home' style={{ width: width }}>
                    <h1>image</h1>
                </motion.section>

            </HorizontalScroll>
        </main>
    )
}

export default Home