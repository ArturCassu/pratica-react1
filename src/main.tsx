import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Component from "./components/Component";
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Component prop={"oi"}/>
  </StrictMode>,
)
