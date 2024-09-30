import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import MainRouter from './routes/mainRouter'
import "./styles/main.scss"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MainRouter/>
    </BrowserRouter>
  </StrictMode>,
)
