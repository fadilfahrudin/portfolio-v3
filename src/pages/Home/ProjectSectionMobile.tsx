import React from 'react'
import { motion} from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { VideoComponent } from '../../components/atomic/Video';
import videoSrc from '../../assets/video/1724589447261-videoplayback.mp4';
import bgDummy from '../../assets/dummy/bg-video.jpg';
import InViewSection from '../../components/molecules/InViewSection';

const ProjectItem: React.FC<{ index: number }> = ({ index }) => {
    const variants = {
        visible: (i: number) => ({
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5
            }
        }),
        hidden: () => ({
            y: "200px",
            transition: {
                duration: 0.3
            }
        })
    }
    return (
        <motion.div className='projectSectionMobile__home--projectItem'>
            <NavLink to={'#'} className='projectDisplayMobile__home'>
                <InViewSection className='projectWrapper' amount={0.9}>
                    {(isInView) => (
                        <>
                            <VideoComponent src={videoSrc} className={`video-project ${isInView ? '' : 'blurEffect'}`} />
                            <motion.img className='bg-project' src={bgDummy} alt="profile" width={1000} height={1000} />
                        </>
                    )}
                </InViewSection>
            </NavLink>
            <InViewSection className="projectDescriptionMobile__home" amount={0.1}>
                {(isInView) => (
                    <>
                        <motion.div className="projectInfo-1" >
                            <motion.span className="creation-date" initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={variants} custom={1}>JULE 2024</motion.span>
                        </motion.div>
                        <NavLink className="projectInfo-2" to='#'>
                            <motion.span className="title-project" initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={variants} custom={2}>Semangat Bantu</motion.span>
                        </NavLink>
                        <motion.div className="projectInfo-3">
                            <motion.ul className="project-tech">
                                <motion.li initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={variants} custom={3}>REDUX</motion.li>
                                <motion.li initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={variants} custom={3.5} >REACT</motion.li>
                                <motion.li initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={variants} custom={4} >SCSS</motion.li>
                            </motion.ul>
                        </motion.div>
                        <motion.button initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={variants} custom={5} type='button' className='btn-projectMobile'>Visit</motion.button>
                    </>
                )}
            </InViewSection>
        </motion.div>
    )
}

const ProjectSectionMobile: React.FC = () => {
    return (
        <section className='projectSectionMobile__home'>
            <ProjectItem index={1} />
            <ProjectItem index={2} />
            <ProjectItem index={3} />
            <ProjectItem index={4} />
        </section>
    )
}

export default ProjectSectionMobile