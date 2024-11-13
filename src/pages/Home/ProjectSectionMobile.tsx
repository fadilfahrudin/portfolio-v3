import React, { useEffect, useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { VideoComponent } from '../../components/atomic/Video';
import videoSrc from '../../assets/video/1724589447261-videoplayback.mp4';
import bgDummy from '../../assets/dummy/bg-video.jpg';

const ProjectItem: React.FC<{ index: number }> = ({ index }) => {
    const ref = useRef(null)
    const videoRef = useRef<HTMLVideoElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`${-55 * index}vh`, `${30 * index}vh`, `${55 * index}vh`]
    })

    const width = useTransform(scrollYProgress, [0, 1], ['5vw', '65vw'])
    const y = useTransform(scrollYProgress, [0.2, 1], ['100vh', '0vh']);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

    const isInView = useInView(videoRef, {
        margin: "0% -40% 0% 0%"
    })
    const isInViewVideo = useInView(videoRef, {
        margin: "0% -20% 0% 0%"
    })

    useEffect(() => {
        if (isInViewVideo) {
            videoRef.current?.play()
        } else {
            videoRef.current?.pause()
        }
    }, [isInViewVideo])


    const variants = {
        visible: (i: number) => ({
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.3
            }
        }),
        hidden: () => ({
            y: "100px",
            transition: {
                duration: 0.3
            }
        })
    }
    return (
        <motion.div className='projectSectionMobile__home--projectItem'>
            <motion.div>
                <NavLink to={'#'} className='projectDisplay__home'>
                    <motion.div className="projectWrapper" style={{ y, scale }} >
                        <VideoComponent ref={videoRef} src={videoSrc} className={`video-project ${isInViewVideo ? '' : 'blurEffect'}`} />
                        <motion.img className='bg-project' src={bgDummy} alt="profile" width={1000} height={1000} />
                    </motion.div>
                </NavLink>
            </motion.div>
            <motion.div className="projectDescription__home">
                <motion.div className="projectInfo-1" >
                    <motion.button type="button" className="btn-project" custom={1} animate={isInView ? 'visible' : 'hidden'} variants={variants}></motion.button>
                    <motion.span className="creation-date" custom={1} animate={isInView ? 'visible' : 'hidden'} variants={variants}>JULE 2024</motion.span>
                </motion.div>
                <NavLink className="projectInfo-2" to='#'>
                    <motion.span className="title-project" custom={2} animate={isInView ? 'visible' : 'hidden'} variants={variants}>Semangat Bantu</motion.span>
                </NavLink>
                <motion.div className="projectInfo-3">
                    <motion.span className="project-number">0{index}</motion.span>
                    <motion.ul className="project-tech">
                        <motion.li custom={3} animate={isInView ? 'visible' : 'hidden'} variants={variants}>REDUX</motion.li>
                        <motion.li custom={4} animate={isInView ? 'visible' : 'hidden'} variants={variants}>REACT</motion.li>
                        <motion.li custom={5} animate={isInView ? 'visible' : 'hidden'} variants={variants}>SCSS</motion.li>
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

const ProjectSectionMobile: React.FC = () => {
    return (
        <section className='projectSectionMobile__home'>

        </section>
    )
}

export default ProjectSectionMobile