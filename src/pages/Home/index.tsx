import React, { useRef } from 'react'
import HorizontalScroll from '../../components/molecules/HorizontalScroll'
import "./home.scss";
import { useScroll, useTransform, motion, useInView } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import myProfile from '../../assets/dummy/fadil-fahrudin.png';
import { NavigationHome } from './NavigatIonHome';
import { IntrodoctionSection } from './IntrodoctionSection';
import ProjectSection from './ProjectSection';


const Home: React.FC = () => {
    const ref = useRef(null)
    const refText = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['-65vh', '0vh', '18vh', '60vw']
    })
    const width = useTransform(scrollYProgress, [0, 1], ['15vw', '80vw'])
    const isInView = useInView(refText, {
        margin: "0px -800px 0px 0px"
    })

    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
    const y = useTransform(scrollYProgress, [0, 0.65], ['5vh', '25vh']);
    const y2 = useTransform(scrollYProgress, [0, 0.65], ['55vh', '25vh']);
    const x = useTransform(scrollYProgress, [0, 0.7], [-200, 0]);


    return (
        <main id='home'>
            <HorizontalScroll scrollLength={285} widthSection={370}>
                <section className='introSection__home'>
                    <NavigationHome />
                    <IntrodoctionSection />
                </section>

                <motion.div className='imageSectionWrapper__home' style={{ width }}>
                    <motion.section className='imageSection__home' style={{ width }}>
                        <NavLink to={'#'} target='_blank'>
                            <motion.img className='img-resume img-profile' src={myProfile} alt="profile" width={1000} height={1000} style={{ y, scale }} />
                            <motion.p initial={{ opacity: 0, y: 180 }} animate={isInView ? { opacity: 1, y: 80 } : { opacity: 0, y: 180 }} transition={{ opacity: isInView ? 1 : 0 }} ref={refText} className='desc__imageSection img-resume'>Frontend Developer with 4 years of experience, Passionate about developing responsive websites and mobile applications using<b className='reactIcon img-resume'>React.</b> Ready to bring innovative ideas to the digital realm!</motion.p>
                        </NavLink>
                    </motion.section>

                    <motion.section className='imageSection__home' style={{ width }}>
                        <NavLink to={'#'} target='_blank'>
                            <motion.img className='img-resume img-profile' src={myProfile} alt="profile" width={1000} height={1000} style={{ y: y2, scale, x }} />
                        </NavLink>
                    </motion.section>
                </motion.div>

                <ProjectSection />
            </HorizontalScroll>
        </main>
    )
}
export default Home