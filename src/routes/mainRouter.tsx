import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ReactLenis from 'lenis/react'
import NotAvailablePage from '../pages/Error/NotAvailablePage'
export default function MainRouter() {
    return (
        <>
            <ReactLenis root>
                {/* <!-- svg: first layer --> */}
                <svg className='noiseFilter'>
                    <filter id='noiseFilter'>
                        <feTurbulence
                            type='fractalNoise'
                            baseFrequency='0.5'
                            numOctaves='5'
                            stitchTiles='stitch' />
                    </filter>

                    <rect width='100%' height='100%' filter='url(#noiseFilter)' />
                </svg>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<NotAvailablePage />} />
                    <Route path='/projects' element={<NotAvailablePage />} />
                    <Route path='/contact' element={<NotAvailablePage />} />
                </Routes>
            </ReactLenis>
        </>
    )
}