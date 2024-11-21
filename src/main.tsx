import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import MainRouter from './routes/mainRouter'
import "./styles/main.scss"
import Pointer from './components/atomic/Pointer'
import ReduxProvider from './components/atomic/ReduxProvider'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ReduxProvider>
      {window.innerWidth > 768 && <Pointer />}
      <MainRouter />
    </ReduxProvider>
  </BrowserRouter>
)
