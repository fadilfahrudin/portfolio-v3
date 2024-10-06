import React, { memo } from 'react'
import Marquee from '../../components/atomic/Marquee'

export const IntrodoctionSection: React.FC = memo(() => {
    return (
        <div className='introduction__home'>
            <Marquee text={['Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, enim?', 'NEW PROJECTS']} />
            <h1 className="myName">I AM FADIL</h1>
            <p className="myDesc">I can translate something digital problem into an application simply but not reduce the desired needs, elegantly, and responsive. and now I am available as a freelancer to help you.</p>
        </div>
    )
})
