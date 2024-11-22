import React, { memo } from 'react'
import Marquee from '../../components/atomic/Marquee'
import { NavigationHome } from './NavigatIonHome'

export const IntrodoctionSection: React.FC = memo(() => {
    return (
        <div className='introduction__home'>
            <NavigationHome />
            <Marquee text={['Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, enim?', 'NEW PROJECTS']} />
            <div className='myName'>
                <span>F</span>
                <span>A</span>
                <span>D</span>
                <span>I</span>
                <span>L</span>
            </div>
            <p className="myDesc">I can translate something digital problem into an application simply but not reduce the desired needs, elegantly, and responsive. and now I am available as a freelancer to help you.</p>
        </div>
    )
})
