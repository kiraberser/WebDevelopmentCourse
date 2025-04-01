import CustomForm from './Form'
import Navbar from './Navbar'
import { ThemeProvider } from './ThemeContext'
//  import Products from './Products'

function App() {
  //Notas: cuando se manda la propiedad increment o reset, se le llama referencia a la función, no se ejecuta
  //por eso se manda sin los parentesis
  //Ademas esto ayuda a la memoria del navegador, ya que no se ejecuta la función hasta que se le de click al boton
  // por eso es que no se hace un callback function
  

  return (   
    <ThemeProvider>
      <Navbar/>
      <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-3xl font-bold mb-4'>Form Validation</h1>
        <p className='text-lg mb-4'>This is a form validation example using React Hook Form and Zod</p>
        <CustomForm/>
      </div>
    </ThemeProvider>

  )
}

export default App
