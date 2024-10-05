import React, { useRef } from 'react'
import Marquee from '../../components/atomic/Marquee'
import HorizontalScroll from '../../components/molecules/HorizontalScroll'
import "./home.scss";
import { useScroll, useTransform, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import useResponsive from '../../utils/useResponsive';
const Home: React.FC = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['-4vw', '10vh', '20vh', '60vw']
    })
    const width = useTransform(scrollYProgress, [0, 1], ['15vw', '80vw'])

    const isMobile = useResponsive('(max-width: 768px)');
    console.log(isMobile, 'test responsive');

    return (
        <main id='home'>
            <HorizontalScroll scrollLength={214} widthSection={215}>
                <section className='introSection__home'>
                    <nav className='nav__home'>
                        <NavLink to='#' className='navLink'>ABOUT</NavLink>
                        <NavLink to='#' className='navLink'>PROJECTS</NavLink>
                        <NavLink to='#' className='navLink'>EXPERTISE</NavLink>
                        <NavLink to='#' className='navLink'>CONTACT</NavLink>
                    </nav>


                    <div className='introduction__home'>
                        <Marquee text={['Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, enim?', 'NEW PROJECTS']} />
                        <h1 className="myName">I AM FADIL</h1>
                        <p className="myDesc">I can translate something digital problem into an application simply but not reduce the desired needs, elegantly, and responsive. and now I am available as a freelancer to help you.</p>
                    </div>

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