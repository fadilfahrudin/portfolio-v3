import React, { memo, useEffect, useRef } from 'react'
import ProjectItem from './ProjectItem';
import { useScroll, useTransform, motion } from 'framer-motion';
import videoGlums from "../../assets/video/glums-compresed.mp4"
import videoInews from "../../assets/video/inews-compresed.mp4"
import videoWebMovie from "../../assets/video/web-movie-compressed.mp4"
import videoUiDesiign from "../../assets/video/mobile-design-compressed.mp4"
import bgGlums from "../../assets/img/glums.jpg"
import bgInews from "../../assets/img/inews.jpg"
import bgWebMovie from "../../assets/img/movie-web.jpg"
import bgUiDesign from "../../assets/img/uidesign.jpg"

const ProjectSection: React.FC = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`${0}vw`, `${0}vw`, `${65 * 4}vh`]
    })
    const scale = useTransform(scrollYProgress, [0.9, 1], [1, 0.6]);
    const height = useTransform(scrollYProgress, [0.9, 1], ['100vh', '55vh']);

    useEffect(() => {
    }, [scrollYProgress])

    return (
        <motion.section id='projects' className='projectSection__home' style={{ scale, height }}>
            <ProjectItem index={1} image={bgGlums} video={videoGlums} link='https://glums.id' title='GLUMS.ID' createdAt={'JUN 2024'} techStack={['ReactJS', 'SASS', 'Framer Motion', 'Redux']} />
            <ProjectItem index={2} image={bgInews} video={videoInews} link='https://inews.id' title='iNews.id' createdAt={'2024'} techStack={['JQuery', 'Javascript', 'SASS', 'HTML']} />
            <ProjectItem index={3} image={bgWebMovie} video={videoWebMovie} link='https://web-movie-navy.vercel.app' title='WEB MOVIE' createdAt={'DEC 2023'} techStack={['NextJS', 'SASS', 'GSAP', 'Redux']} />
            <ProjectItem index={4} image={bgUiDesign} video={videoUiDesiign} link='#' title='Donation App' createdAt={'JUN 2020'} techStack={['React Native', 'Redux', 'React Reanimated']} />
        </motion.section>
    )
}

export default memo(ProjectSection)