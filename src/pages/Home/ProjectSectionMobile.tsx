import React, { memo, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { VideoComponent } from '../../components/atomic/Video';
import InViewSection from '../../components/molecules/InViewSection';

import videoInews from "../../assets/video/inews-compresed.mp4"
import videoWebMovie from "../../assets/video/web-movie-compressed.mp4"
import videoUiDesiign from "../../assets/video/mobile-design-compressed.mp4"
import videoGlums from "../../assets/video/glums-compresed.mp4"
import bgGlums from "../../assets/img/glums.jpg"
import bgInews from "../../assets/img/inews.jpg"
import bgWebMovie from "../../assets/img/movie-web.jpg"
import bgUiDesign from "../../assets/img/uidesign.jpg"


interface ProjectItemProps {
    createdAt: string;
    title: string;
    image: string;
    video: string;
    link: string;
    techStack: string[];
}
const ProjectItem: React.FC<ProjectItemProps> =  memo(({ createdAt, title, image, video, link, techStack }) => {
    const [isInViewVideo, setIsInViewVideo] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null);
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
        <div className='projectSectionMobile__home--projectItem'>
            <NavLink to={'#'} className='projectDisplayMobile__home'>
                <InViewSection className='projectWrapper' amount={0.9}>
                    {(isInView) => {
                        setIsInViewVideo(isInView)
                        return(
                        <>
                            <VideoComponent src={video} ref={videoRef} className={`video-project ${isInView ? '' : 'blurEffect'}`} />
                            <img className='bg-project' src={image} alt="profile" width={1000} height={1000} />
                        </>
                        )
                    }
                    }
                </InViewSection>
            </NavLink>
            <InViewSection className="projectDescriptionMobile__home" amount={0.1}>
                {(isInView) => (
                    <>
                        <div className="projectInfo-1" >
                            <motion.span className="creation-date" initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={variants} custom={1}>{createdAt}</motion.span>
                        </div>
                        <NavLink className="projectInfo-2" to={link} rel='noreferrer noopener' target='_blank'>
                            <motion.span className="title-project" initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={variants} custom={2}>{title}</motion.span>
                        </NavLink>
                        <div className="projectInfo-3">
                            <ul className="project-tech">
                                {
                                    techStack.map((tech, i) => (
                                        <motion.li key={i} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={variants} custom={2.5 + i}>{tech}</motion.li>
                                    ))
                                }
                            </ul>
                        </div>
                        <motion.a href={link} target="_blank" rel='noreferrer noopener' initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={variants} custom={5} type='button' className='btn-projectMobile'>Visit</motion.a>
                    </>
                )}
            </InViewSection>
        </div>
    )
})

const ProjectSectionMobile: React.FC = () => {
    return (
        <section className='projectSectionMobile__home'>
            <ProjectItem image={bgGlums} video={videoGlums} link='https://glums.id' title='GLUMS.ID' createdAt={'JUN 2024'} techStack={['ReactJS', 'SASS', 'Framer Motion', 'Redux']} />
            <ProjectItem image={bgInews} video={videoInews} link='https://inews.id' title='iNews.id' createdAt={'2024'} techStack={['JQuery', 'Javascript', 'SASS', 'HTML']} />
            <ProjectItem image={bgWebMovie} video={videoWebMovie} link='https://web-movie-navy.vercel.app' title='WEB MOVIE' createdAt={'DEC 2023'} techStack={['NextJS', 'SASS', 'GSAP', 'Redux']} />
            <ProjectItem image={bgUiDesign} video={videoUiDesiign} link='#' title='Design Mobile App' createdAt={'JUN 2020'} techStack={['Figma']} />
        </section>
    )
}

export default ProjectSectionMobile