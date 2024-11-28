import { NavLink } from "react-router-dom";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useRef, FC, useEffect, memo } from "react";
import { VideoComponent } from "../../components/atomic/Video";



interface ProjectItemProps {
    index: number;
    createdAt: string;
    title: string;
    image: string;
    video: string;
    link: string;
    techStack: string[];
}


const ProjectItem: FC<ProjectItemProps> = ({ index, createdAt, title, image, video, link, techStack }) => {
    const ref = useRef(null)
    const videoRef = useRef<HTMLVideoElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`${-10 * index}vh`, `${index}vh`, `${index * 40}vh`, `${65 * index}vh`]
    })

    const width = useTransform(scrollYProgress, [0, 1], ['10vw', '65vw'])
    const y = useTransform(scrollYProgress, [0, 1], ['45vh', '0vh']);
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
        <motion.section className='projectItem' style={{ width }}>
            <div>
                <NavLink target="_blank" rel="noreferrer noopener" to={link} className='projectDisplay__home'>
                    <motion.div className="projectWrapper" style={{ y, scale }} >
                        <VideoComponent ref={videoRef} src={video} className={`video-project ${isInViewVideo ? '' : 'blurEffect'}`} />
                        <img className='bg-project' src={image} alt="profile" width={1000} height={1000} />
                    </motion.div>
                </NavLink>
            </div>
            <div className="projectDescription__home">
                <div className="projectInfo-1" >
                    <motion.a target="_blank" rel="noreferrer noopener" href={link} className="btn-project" custom={1} animate={isInView ? 'visible' : 'hidden'} variants={variants}></motion.a>
                    <motion.span className="creation-date" custom={1} animate={isInView ? 'visible' : 'hidden'} variants={variants}>{createdAt}</motion.span>
                </div>
                <NavLink className="projectInfo-2" rel="noreferrer noopener" to={link} target="_blank">
                    <motion.span className="title-project" custom={2} animate={isInView ? 'visible' : 'hidden'} variants={variants}>{title}</motion.span>
                </NavLink>
                <div className="projectInfo-3">
                    <span className="project-number">0{index}</span>
                    <ul className="project-tech">
                        {
                            techStack.map((item, index) => (
                                <motion.li key={index} custom={3 + index} animate={isInView ? 'visible' : 'hidden'} variants={variants}>{item.toUpperCase()}</motion.li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </motion.section>
    )
}

export default memo(ProjectItem)