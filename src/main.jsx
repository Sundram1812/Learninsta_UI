import { StrictMode, useLayoutEffect } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, useLocation} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ScrollToTop from './Utilities/ScrollToTop.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop/>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
