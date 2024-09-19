import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'// imfort for use the react router dom
import PlayerContextProvider from './context/PlayerContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* we give the browser support  to App  by this  */}
    <BrowserRouter>
    <PlayerContextProvider>
      <App />
    </PlayerContextProvider>
  
    </BrowserRouter>
  </StrictMode>,
)
