import ReactLenis from 'lenis/react'
import {Route, Routes} from 'react-router-dom'
export default function MainRouter() {

    return(
        <>
            <ReactLenis root>
                <Routes>
                    <Route path='/' element={<h1>Home</h1>} />
                </Routes>
            </ReactLenis>
        </>
    )
}