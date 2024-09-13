import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../src/components/App'
import '../public/index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
