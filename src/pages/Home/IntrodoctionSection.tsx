import React, { memo } from 'react'
import Marquee from '../../components/atomic/Marquee'
import { NavigationHome } from './NavigatIonHome'

export const IntrodoctionSection: React.FC = memo(() => {
    return (
        <div className='introduction__home'>
            <NavigationHome />
            <Marquee text={['Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, enim?', 'NEW PROJECTS']} />
            <div className='myName'>
                <svg width="35" height="217" viewBox="0 0 35 217" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.690652 -1.4782e-05H34.7907V217H0.690652V-1.4782e-05Z" fill="#0E0E0E" />
                </svg>
                <div>
                    <svg width="117" height="217" viewBox="0 0 117 217" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.3481 -1.4782e-05H81.5381L116.878 217H82.7781L76.5781 173.91V174.53H37.8281L31.6281 217H0.00808597L35.3481 -1.4782e-05ZM72.5481 145.08L57.3581 37.82H56.7381L41.8581 145.08H72.5481Z" fill="#0E0E0E" />
                    </svg>
                    <svg width="143" height="217" viewBox="0 0 143 217" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.80668 -1.4782e-05H49.4767L71.1767 155.31H71.7967L93.4967 -1.4782e-05H142.167V217H109.927V52.7H109.307L84.5067 217H55.9867L31.1867 52.7H30.5667V217H0.80668V-1.4782e-05Z" fill="#0E0E0E" />
                    </svg>
                </div>

                <div>
                    <svg width="72" height="217" viewBox="0 0 72 217" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.92875 -1.4782e-05H91.1388V31H35.0288V91.45H79.0488V122.45H35.0288V217H0.92875V-1.4782e-05Z" fill="#0E0E0E" />
                    </svg>
                    <svg width="117" height="217" viewBox="0 0 117 217" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.3481 -1.4782e-05H81.5381L116.878 217H82.7781L76.5781 173.91V174.53H37.8281L31.6281 217H0.00808597L35.3481 -1.4782e-05ZM72.5481 145.08L57.3581 37.82H56.7381L41.8581 145.08H72.5481Z" fill="#0E0E0E" />
                    </svg>
                    <svg width="104" height="217" viewBox="0 0 104 217" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.24125 -1.4782e-05H52.3213C69.2679 -1.4782e-05 81.9779 4.54665 90.4513 13.64C98.9246 22.7333 103.161 36.0633 103.161 53.63V163.37C103.161 180.937 98.9246 194.267 90.4513 203.36C81.9779 212.453 69.2679 217 52.3213 217H0.24125V-1.4782e-05ZM51.7013 186C57.2813 186 61.5179 184.347 64.4113 181.04C67.5113 177.733 69.0613 172.36 69.0613 164.92V52.08C69.0613 44.64 67.5113 39.2667 64.4113 35.96C61.5179 32.6533 57.2813 31 51.7013 31H34.3413V186H51.7013Z" fill="#0E0E0E" />
                    </svg>
                    <svg width="35" height="217" viewBox="0 0 35 217" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.690652 -1.4782e-05H34.7907V217H0.690652V-1.4782e-05Z" fill="#0E0E0E" />
                    </svg>
                    <svg width="60" height="217" viewBox="0 0 57 217" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.92875 -1.4782e-05H35.0288V186H91.1388V217H0.92875V-1.4782e-05Z" fill="#0E0E0E" />
                    </svg>
                </div>


            </div>
            <p className="myDesc">I can translate something digital problem into an application simply but not reduce the desired needs, elegantly, and responsive. and now I am available as a freelancer to help you.</p>
        </div>
    )
})
