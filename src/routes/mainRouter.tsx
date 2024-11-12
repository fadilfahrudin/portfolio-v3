import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import useResponsive from '../utils/useResponsive'
export default function MainRouter() {
    const isMobile = useResponsive('(max-width: 1023px)')

    return (
        <Routes>
            {isMobile ?
                <Route path='/' element={<h1>Mobile</h1>} />
                :
                <Route path='/' element={<Home />} />
            }
        </Routes>
    )
}