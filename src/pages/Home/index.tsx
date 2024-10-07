import React, { useRef } from 'react'
import HorizontalScroll from '../../components/molecules/HorizontalScroll'
import "./home.scss";
import { useScroll, useTransform, motion, useInView } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import myProfile from '../../assets/dummy/fadil-fahrudin.png';
import videoBgdummy from '../../assets/dummy/bg-video.jpg';
import { NavigationHome } from './NavigatIonHome';
import { IntrodoctionSection } from './IntrodoctionSection';


const Home: React.FC = () => {
    const ref = useRef(null)
    const refText = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['-65vh', '0vh', '18vh', '60vw']
    })
    const width = useTransform(scrollYProgress, [0, 1], ['15vw', '80vw'])
    const widthProject = useTransform(scrollYProgress, [0, 1], ['15vw', '80vw'])
    const isInView = useInView(refText, {
        margin: "0px -700px 0px 0px"
    })

    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
    const y = useTransform(scrollYProgress, [0, 0.65], ['5vh', '25vh']);
    const y2 = useTransform(scrollYProgress, [0, 0.65], ['55vh', '25vh']);
    const x = useTransform(scrollYProgress, [0, 0.7], [-200, 0]);
    const yProject = useTransform(scrollYProgress, [0, 0.5], ['65vh', '0vh']);
    const scaleProject = useTransform(scrollYProgress, [0, 1], [1, 1.5]);


    return (
        <main id='home'>
            <HorizontalScroll scrollLength={200} widthSection={355}>
                <section className='introSection__home'>
                    <NavigationHome />
                    <IntrodoctionSection />
                </section>

                <motion.div className='imageSectionWrapper__home' style={{ width }}> 
                    <motion.section className='imageSection__home' style={{ width }}>
                        <NavLink to={'#'} target='_blank'>
                            <motion.img className='img-resume img-profile' src={myProfile} alt="profile" width={1000} height={1000} style={{ y, scale }} />
                            <motion.p initial={{ opacity: 0, y: 180 }} animate={isInView ? { opacity: 1, y: 80 } : { opacity: 0, y: 180 }} transition={{ opacity: isInView ? 1 : 0 }} ref={refText} className='desc__imageSection img-resume'>Frontend Developer with 4 years of experience, Passionate about developing responsive websites and mobile applications using<span className='reactIcon img-resume'>React</span>. Ready to bring innovative ideas to the digital realm!</motion.p>
                        </NavLink>
                    </motion.section>

                    <motion.section className='imageSection__home' style={{ width }}>
                        <NavLink to={'#'} target='_blank'>
                            <motion.img className='img-resume img-profile' src={myProfile} alt="profile" width={1000} height={1000} style={{ y: y2, scale, x }} />
                        </NavLink>
                    </motion.section>
                </motion.div>

                <motion.section className='projectSection__home one' style={{ width: widthProject }}>
                    <NavLink to={'#'} className='projectDisplay__home'>
                        <motion.img className='bg-project' src={videoBgdummy} alt="profile" width={1000} height={1000} style={{ y: yProject, scale: scaleProject }} />
                    </NavLink>
                </motion.section>
                <motion.section className='projectSection__home two' style={{ width: widthProject }}>

                </motion.section>
            </HorizontalScroll>
        </main>
    )
}
export default Home