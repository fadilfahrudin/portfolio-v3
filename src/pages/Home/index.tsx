import React, { useRef, useState } from 'react'
import HorizontalScroll from '../../components/molecules/HorizontalScroll'
import "./home.scss";
import { useScroll, useTransform, motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import myProfile from '../../assets/dummy/fadil-fahrudin.png';
import { IntrodoctionSection } from './IntrodoctionSection';
import ProjectSection from './ProjectSection';
import IcJs from "../../assets/img/ic-js.png";
import IcTs from "../../assets/img/ic-ts.png";
import IcSass from "../../assets/img/ic-sass.png";
import IcTw from "../../assets/img/ic-tw.png";
import IcHtml from "../../assets/img/ic-html.png";
import IcBootstrap from "../../assets/img/ic-bootstrap.png";
import IcReact from "../../assets/img/ic-react.png";
import IcMysql from "../../assets/img/ic-mysql.png";
import IcNextJs from "../../assets/img/ic-nextjs.png";
import IcNodeJs from "../../assets/img/ic-nodejs.png";
import useStringToArray from '../../utils/useStringToArray';
import InViewSection from '../../components/molecules/InViewSection';
import useResponsive from '../../utils/useResponsive'
import ProjectSectionMobile from './ProjectSectionMobile';
import BurgerMenu from '../../components/molecules/BurgerMenu';
import { useFormattedTime } from '../../utils/useFormattedTime';
import { useAppSelector } from '../../utils/reduxHooks';


const Home: React.FC = () => {
    const { isFirstLoad } = useAppSelector(state => state.loadingSlice)
    const isMobile = useResponsive('(max-width: 1024px)')
    const getTime = useFormattedTime({ zone: 'WIB' })
    const ref = useRef(null)
    const contactRef = useRef(null)
    const refText = useRef(null)
    const { scrollYProgress } = useScroll({
        offset: ['0vh', '5vh', '18vh', '60vw']
    })
    const { scrollYProgress: scrollYp2 } = useScroll({
        target: contactRef,
        offset: ['150vh', '300vh']
    })
    const { scrollYProgress: scrollYp3 } = useScroll({
        target: contactRef,
        offset: ['24vh', '50vh']
    })
    const stack = {
        active: (i: number) => ({
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.3
            }
        }),
        hidden: () => ({
            y: 150,
            transition: {
                duration: 0.3
            }
        })
    }
    const expertiseStack = {
        active: (i: number) => ({
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.3
            }
        }),
        hidden: () => ({
            y: 150,
            transition: {
                duration: 0.3
            }
        })
    }
    const contactStack = {
        active: (i: number) => ({
            y: 0,
            transition: {
                delay: i * 0.3,
                duration: 0.5
            }
        }),
        hidden: () => ({
            y: 150,
            transition: {
                duration: 0.5
            }
        })
    }

    const width = useTransform(scrollYProgress, [0, 1], ['30vw', '80vw'])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
    const scale2 = useTransform(scrollYp2, [0, 0.5], [1, 0.95]);
    const scale3 = useTransform(scrollYp3, [0, 1], [1, 0.4]);
    const yImg1 = useTransform(scrollYProgress, [0, 0.65], ['15vh', '25vh']);
    const yImg2 = useTransform(scrollYProgress, [0, 0.65], ['45vh', '25vh']);
    const x = useTransform(scrollYProgress, [0, 0.7], [-200, 0]);

    const expertise = useStringToArray({ char: 'Expertise' })
    const [isCopy, setIsCopy] = useState(false)
    const handleCopyText = async () => {
        const textToCopy = 'fadilfahrudin32@gmail.com';
        try {
            await navigator.clipboard.writeText(textToCopy);
            setIsCopy(!isCopy)
            setTimeout(() => setIsCopy(false), 2000)
        } catch (error) {
            console.error('Failed to copy text:', error);
        }
    }

    return (
        <main id='home' style={isFirstLoad ? { overflow: 'hidden', position: 'fixed', pointerEvents: 'none' } : {}}>
            <BurgerMenu />
            {!isMobile ?
                <HorizontalScroll scrollLength={270} widthSection={385}>
                    <section id='about' className='introSection__home'>
                        <IntrodoctionSection />
                    </section>
                    <InViewSection margin="0% -60% 0% 0%">
                        {(isInView) => (
                            <motion.div ref={ref} className='imageSectionWrapper__home' style={{ width }}>
                                <motion.section className='imageSection__home' style={{ width }}>
                                    <NavLink to={'#'} target='_blank'>
                                        <motion.img className='img-resume img-profile' src={myProfile} alt="profile" width={1000} height={1000} style={{ y: yImg1, scale }} />
                                        <motion.p initial={{ opacity: 0, y: 180 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 180 }} transition={{ duration: 0.5, ease: 'easeInOut' }} ref={refText} className='desc__imageSection img-resume'>Frontend Developer with 4 years of experience, Passionate about developing responsive websites and mobile applications using<b className='reactIcon img-resume'>React.</b> Ready to bring innovative ideas to the digital realm!</motion.p>
                                    </NavLink>
                                </motion.section>

                                <motion.section className='imageSection__home' style={{ width }}>
                                    <NavLink to={'#'} target='_blank'>
                                        <motion.img className='img-resume img-profile' src={myProfile} alt="profile" width={1000} height={1000} style={{ y: yImg2, scale, x }} />
                                    </NavLink>
                                </motion.section>
                            </motion.div>

                        )}
                    </InViewSection>

                    <ProjectSection />

                    <InViewSection margin={"0% -72% 0% 0%"} className='expertises__home'>
                        {(isInView) => (
                            <>
                                <motion.div className='expertises__home--title'>
                                    {expertise.map((char, i) => (
                                        <motion.span key={i} custom={i} animate={isInView ? 'active' : 'hidden'} variants={expertiseStack}>{char}</motion.span>
                                    ))}
                                </motion.div>
                                <motion.div className='expertises__home--desc'>
                                    <motion.div className='desc__P'>
                                        <motion.p initial={{ y: 250 }} animate={isInView ? { y: 0 } : { y: 250 }} transition={{ delay: 0.2, duration: 0.5 }} >
                                            My mission is to make magic by delivering a visually captivating and responsive user interface, supported by fast performance, providing a compelling advantage for your business with these techs:
                                        </motion.p>
                                    </motion.div>
                                    <ul className='desc__list-stack'>
                                        <motion.li custom={1} animate={isInView ? 'active' : 'hidden'} variants={stack}><img src={IcHtml} alt="Javascript" className='ic-stacks' width={32} height={32} /></motion.li>
                                        <motion.li custom={2} animate={isInView ? 'active' : 'hidden'} variants={stack}><img src={IcJs} alt="Javascript" className='ic-stacks' width={32} height={32} /></motion.li>
                                        <motion.li custom={3} animate={isInView ? 'active' : 'hidden'} variants={stack}><img src={IcTs} alt="Javascript" className='ic-stacks' width={32} height={32} /></motion.li>
                                        <motion.li custom={4} animate={isInView ? 'active' : 'hidden'} variants={stack}><img src={IcSass} alt="Javascript" className='ic-stacks' width={32} height={32} /></motion.li>
                                        <motion.li custom={5} animate={isInView ? 'active' : 'hidden'} variants={stack}><img src={IcReact} alt="Javascript" className='ic-stacks' width={32} height={32} /></motion.li>
                                        <motion.li custom={6} animate={isInView ? 'active' : 'hidden'} variants={stack}><img src={IcNextJs} alt="Javascript" className='ic-stacks' width={32} height={32} /></motion.li>
                                        <motion.li custom={7} animate={isInView ? 'active' : 'hidden'} variants={stack}><img src={IcNodeJs} alt="Javascript" className='ic-stacks' width={32} height={32} /></motion.li>
                                        <motion.li custom={8} animate={isInView ? 'active' : 'hidden'} variants={stack}><img src={IcTw} alt="Javascript" className='ic-stacks' width={32} height={32} /></motion.li>
                                        <motion.li custom={9} animate={isInView ? 'active' : 'hidden'} variants={stack}><img src={IcBootstrap} alt="Javascript" className='ic-stacks' width={32} height={32} /></motion.li>
                                        <motion.li custom={10} animate={isInView ? 'active' : 'hidden'} variants={stack}><img src={IcMysql} alt="Javascript" className='ic-stacks' width={32} height={32} /></motion.li>
                                    </ul>
                                </motion.div>
                            </>
                        )}
                    </InViewSection>
                </HorizontalScroll>
                :
                <>
                    <section className='introSection__home'>
                        <IntrodoctionSection />
                    </section>
                    <NavLink to={'#'} target='_blank'>
                        <InViewSection className='imageSectionWrapperMobile__home' amount={0.4}>
                            {(isInView) => (
                                <>
                                    <motion.img className='img-profile' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : ''} transition={{ duration: 0.5, ease: 'easeIn' }} src={myProfile} alt="profile" width={1000} height={1000} />
                                    <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : ''} transition={{ duration: 0.5, ease: 'easeIn', delay: 0.5 }} className="btn-resume-wrapper">RESUME <motion.span></motion.span></motion.div>
                                    <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : ''} transition={{ duration: 0.5, ease: 'easeIn', delay: 1 }} className='desc__imageSection'>Frontend Developer with 4 years of experience, Passionate about developing responsive websites and mobile applications using<b className='reactIcon img-resume'> React.</b> Ready to bring innovative ideas to the digital realm!</motion.p>
                                </>
                            )}
                        </InViewSection>
                    </NavLink>
                    <ProjectSectionMobile />
                    <InViewSection className='expertisesMobile__home'>
                        {(isInView) => (
                            <>
                                <motion.div className='expertisesMobile__home--title'>
                                    {expertise.map((char, i) => (
                                        <motion.span key={i} custom={i} animate={isInView ? 'active' : 'hidden'} variants={expertiseStack}>{char}</motion.span>
                                    ))}
                                </motion.div>
                                <motion.div className='expertisesMobile__home--desc'>
                                    <motion.div className='desc__P'>
                                        <motion.p initial={{ y: 250 }} animate={isInView ? { y: 0 } : { y: 250 }} transition={{ delay: 0.2, duration: 0.5 }} >
                                            My mission is to make magic by delivering a visually captivating and responsive user interface, supported by fast performance, providing a compelling advantage for your business with these techs:
                                        </motion.p>
                                    </motion.div>
                                    <ul className='desc__list-stack'>
                                        <motion.li custom={1} animate={isInView ? 'active' : 'hidden'} variants={stack}><img src={IcHtml} alt="Javascript" className='ic-stacks' width={32} height={32} /></motion.li>
                                        <motion.li custom={2} animate={isInView ? 'active' : 'hidden'} variants={stack}><img src={IcJs} alt="Javascript" className='ic-stacks' width={32} height={32} /></motion.li>
                                        <motion.li custom={3} animate={isInView ? 'active' : 'hidden'} variants={stack}><img src={IcTs} alt="Javascript" className='ic-stacks' width={32} height={32} /></motion.li>
                                        <motion.li custom={4} animate={isInView ? 'active' : 'hidden'} variants={stack}><img src={IcSass} alt="Javascript" className='ic-stacks' width={32} height={32} /></motion.li>
                                        <motion.li custom={5} animate={isInView ? 'active' : 'hidden'} variants={stack}><img src={IcReact} alt="Javascript" className='ic-stacks' width={32} height={32} /></motion.li>
                                        <motion.li custom={6} animate={isInView ? 'active' : 'hidden'} variants={stack}><img src={IcNextJs} alt="Javascript" className='ic-stacks' width={32} height={32} /></motion.li>
                                        <motion.li custom={7} animate={isInView ? 'active' : 'hidden'} variants={stack}><img src={IcNodeJs} alt="Javascript" className='ic-stacks' width={32} height={32} /></motion.li>
                                        <motion.li custom={8} animate={isInView ? 'active' : 'hidden'} variants={stack}><img src={IcTw} alt="Javascript" className='ic-stacks' width={32} height={32} /></motion.li>
                                        <motion.li custom={9} animate={isInView ? 'active' : 'hidden'} variants={stack}><img src={IcBootstrap} alt="Javascript" className='ic-stacks' width={32} height={32} /></motion.li>
                                        <motion.li custom={10} animate={isInView ? 'active' : 'hidden'} variants={stack}><img src={IcMysql} alt="Javascript" className='ic-stacks' width={32} height={32} /></motion.li>
                                    </ul>
                                </motion.div>
                            </>
                        )}
                    </InViewSection>
                </>
            }
            <section id='contact' ref={contactRef} className='expertise-list__home' >
                <motion.div className='expertise__list' style={{ top: 'calc(62px * 1)' }}>
                    <motion.div className='list__title' style={{ scale: scale3 }}>WEB DEVELOPMENT</motion.div>
                    <div className='list__body'>
                        <p>With my front-end web developer expertise, I can translate designs into programming code to bring websites to life with captivating interactivity. I deliver visually appealing aesthetics but also ensure functionality by implementing cutting-edge technologies. Furthermore, my backend development skills enable me to create RESTful APIs that enhance interaction between the website and server, elevating the user experience.</p>
                        <ol>
                            <li>Web Responsive</li>
                            <li>RESTfull API</li>
                            <li>SEO Optimization</li>
                            <li>Motion & Animation</li>
                        </ol>
                    </div>
                </motion.div>
                <motion.div className='expertise__list' style={{ top: 'calc(62px * 2)' }}>
                    <motion.div className='list__title'>MOBILE DEVELOPMENT</motion.div>
                    <div className='list__body'>
                        <p>As a mobile application developer with expertise in React Native, I combine design aesthetics with technological performance to create intuitive and responsive applications. I excel at transforming concepts into real-world applications, delivering engaging interfaces while ensuring optimal performance across various devices. Backed by my backend development skills, I build RESTful APIs that enhance the interaction between applications and servers, providing a seamless and efficient user experience.</p>
                        <ol>
                            <li>Mobile Apps Development</li>
                            <li>RESTfull API</li>
                        </ol>
                    </div>
                </motion.div>
                <InViewSection className='contact__home' margin="0px 0px -300px 0px">
                    {(isInView) => (
                        <motion.div className='contact__home--wrapper' style={{ scale: scale2 }}>
                            <motion.div className='lets-connect'>
                                <motion.div className='connect-title'><motion.span animate={isInView ? "active" : "hidden"} variants={contactStack} custom={1}>LETS CONNECT &</motion.span> </motion.div>
                                <motion.div className='magic-title'><motion.span animate={isInView ? "active" : "hidden"} variants={contactStack} custom={2}>MAKE A MAGIC</motion.span></motion.div>
                                <motion.a href='mailto:fadilfahrudin32@gmail.com' className='btn-send-email' animate={isInView ? "active" : "hidden"} variants={contactStack} custom={3}>Send email <span><i className='ic ic-arrow'></i></span></motion.a>
                            </motion.div>
                            <motion.div className='contact-footer'>
                                <div>
                                    <motion.span>AVAILABLE AT</motion.span>
                                    <motion.span>JAKARTA, INDONESIAN</motion.span>
                                </div>
                                <div>
                                    <motion.span>FEEL FREE TO REACH OUT TO ME</motion.span>
                                    <motion.button type='button' className='btn-copy' onClick={handleCopyText}>
                                        fadilfahrudin32@gmail.com
                                        <i className='ic ic-copy'></i>
                                        <AnimatePresence>
                                            {
                                                isCopy && <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut' }} exit={{ opacity: 1, y: 10 }} className='text-copied'>Copied!</motion.span>
                                            }
                                        </AnimatePresence>
                                    </motion.button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </InViewSection>
            </section>
            <InViewSection className='footer__home' margin="0px 0px -100px 0px" >
                {(isInView) => {
                    return (
                        <>
                            <ul className='footer__home--navigation-wrapper'>
                                <li>
                                    <motion.span>CREATED BY THESE TECHS:</motion.span>
                                    <ul>
                                        <li><motion.span animate={isInView ? "active" : "hidden"} custom={1} variants={stack}>REACT</motion.span></li>
                                        <li><motion.span animate={isInView ? "active" : "hidden"} custom={2} variants={stack}>FRAMER MOTION</motion.span></li>
                                        <li><motion.span animate={isInView ? "active" : "hidden"} custom={3} variants={stack}>REDUX</motion.span></li>
                                        <li><motion.span animate={isInView ? "active" : "hidden"} custom={4} variants={stack}>SASS</motion.span></li>
                                    </ul>
                                </li>
                                <li>
                                    <motion.span>SOCIAL MEDIA</motion.span>
                                    <ul>
                                        <li><motion.span animate={isInView ? "active" : "hidden"} custom={1} variants={stack}><Link to="https://instagram.com/fadilfahrudin" target='_blank'>INSTAGRAM</Link></motion.span></li>
                                        <li><motion.span animate={isInView ? "active" : "hidden"} custom={2} variants={stack}><Link to="https://github.com/fadilfahrudin" target='_blank'>GITHUB</Link></motion.span></li>
                                        <li><motion.span animate={isInView ? "active" : "hidden"} custom={3} variants={stack}><Link to="https://www.linkedin.com/in/fadillahfahrudin/" target='_blank'>LINKEDIN</Link></motion.span></li>
                                    </ul>
                                </li>
                                <li>
                                    <motion.span>NAVIGATION</motion.span>
                                    <ul>
                                        <li><motion.span animate={isInView ? "active" : "hidden"} custom={1} variants={stack}><Link to="/about">ABOUT</Link></motion.span></li>
                                        <li><motion.span animate={isInView ? "active" : "hidden"} custom={2} variants={stack}><Link to="/projects">PROJECTS</Link></motion.span></li>
                                        <li><motion.span animate={isInView ? "active" : "hidden"} custom={3} variants={stack}><Link to="/contact">CONTACT</Link></motion.span></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className='footer__home--licence'>
                                <div>
                                    <motion.span>©2024</motion.span>
                                    <motion.span>FADIL FAHRUDDIN</motion.span>
                                </div>
                                <div>
                                    <motion.span>LOCAL TIME</motion.span>
                                    <motion.span>{getTime}</motion.span>
                                </div>
                            </div>
                        </>
                    )
                }}
            </InViewSection>
        </main>
    )
}
export default Home