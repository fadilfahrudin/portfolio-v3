import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ReactLenis from 'lenis/react'
import NotAvailablePage from '../pages/Error/NotAvailablePage'
import { LoadPage } from '../components/molecules/LoadPage'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../utils/reduxHooks'
import { setIsFirstLoad } from '../redux/slice/loadingSlice'
import PageNotFound from '../pages/Error/PageNotFound'
export default function MainRouter() {
    const { isFirstLoad } = useAppSelector(state => state.loadingSlice)
    const dispatch = useAppDispatch()
    useEffect(() => {
        setTimeout(() => dispatch(setIsFirstLoad(false)), 2700)
    }, [])

    return (
        <>
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

            <AnimatePresence>
                {
                    isFirstLoad && <LoadPage />
                }
            </AnimatePresence>
            <ReactLenis root>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<NotAvailablePage />} />
                    <Route path='/projects' element={<NotAvailablePage />} />
                    <Route path='/contact' element={<NotAvailablePage />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </ReactLenis>
        </>
    )
}