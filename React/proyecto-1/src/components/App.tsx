import Products from './Products'

function App() {
  //Notas: cuando se manda la propiedad increment o reset, se le llama referencia a la función, no se ejecuta
  //por eso se manda sin los parentesis
  //Ademas esto ayuda a la memoria del navegador, ya que no se ejecuta la función hasta que se le de click al boton
  // por eso es que no se hace un callback function

  return (
    <>
      <Products/>
    </>
  )
}

export default App
