import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import './index.css'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    
    <BrowserRouter>
    <LocomotiveScrollProvider>
    <App />

    </LocomotiveScrollProvider>
    </BrowserRouter>
  </StrictMode>,

)
