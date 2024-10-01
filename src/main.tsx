import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import MainRouter from './routes/mainRouter'
import "./styles/main.scss"
import ReactLenis from 'lenis/react'
import Pointer from './components/atomic/Pointer'
import ReduxProvider from './components/atomic/ReduxProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ReduxProvider>
        <ReactLenis root>
          {window.innerWidth > 768 && <Pointer />}
          <MainRouter />
        </ReactLenis>
      </ReduxProvider>
    </BrowserRouter>
  </StrictMode>,
)
