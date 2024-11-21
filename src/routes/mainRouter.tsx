import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ReactLenis from 'lenis/react'
export default function MainRouter() {
    return (
        <>
            <ReactLenis root>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </ReactLenis>
        </>
    )
}