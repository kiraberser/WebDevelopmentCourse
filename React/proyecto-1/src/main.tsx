import { StrictMode } from 'react' // Esto hace qeu solo se importe el componente StrictMode de react, no todo el paquete
import { createRoot } from 'react-dom/client'
import App from './components/App.tsx'

// create root trabaja con el dom y verifica si nuestro html tiene un elemento con el id root
// renderiza el componente App en el elemento root
createRoot(document.getElementById('root')!).render(
  <StrictMode> 
    <App /> 
  </StrictMode>,
)
