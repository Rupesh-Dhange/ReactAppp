import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Appp from './Components/Appp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Appp />
  </StrictMode>,
)
