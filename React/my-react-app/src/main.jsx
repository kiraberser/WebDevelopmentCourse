import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import './css/index.css'
import Footer from './components/footer'
import Note from './components/Note'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Note />
    <Footer />
  </StrictMode>,
)
