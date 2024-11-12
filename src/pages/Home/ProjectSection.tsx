import React, { useEffect, useRef } from 'react'
import ProjectItem from './ProjectItem';
import { useScroll, useTransform, motion } from 'framer-motion';

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
        <motion.section className='projectSection__home' style={{ scale, height }}>
            <ProjectItem index={1} />
            <ProjectItem index={2} />
            <ProjectItem index={3} />
            <ProjectItem index={4} />
        </motion.section>
    )
}

export default ProjectSection