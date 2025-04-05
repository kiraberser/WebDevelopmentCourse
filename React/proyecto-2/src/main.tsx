import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TodoApp } from './components/TodoApp'
import { AppRouter } from './routes/AppRouter'

import { TodoProvider } from "./context/TodoContext"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoProvider>
      <AppRouter>
        <TodoApp />
      </AppRouter>
    </TodoProvider>
  </StrictMode>,
)
