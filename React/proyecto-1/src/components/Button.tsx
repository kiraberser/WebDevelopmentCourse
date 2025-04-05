
// Se declara un interface para definir las propiedades que se van a recibir
// Se recibe un string y una funcion que se ejecutara al hacer click en el boton

import React from "react";
import '../styles.css'

// Tipado de typescript
// Se declara un interface para definir las propiedades que se van a recibir
interface Props {
    children: React.ReactNode;
    parentMethod?: () => void;
    type: any
}

//React.memo es un HOC(Higuer Order Component, 
// Memoriza un componente completo, 
// Evita re-renders cuando las props no cambian
// En este caso es util porque Button se utiliza varias veces
export const Button = React.memo(({children, parentMethod, type}: Props ) => {
  return (
    <div>
        <button className="p-2 w-70 border rounded-md m-3 cursor-pointer text-white bg-blue-950 hover:bg-blue-800 " type={type} onClick={parentMethod}>
            {children}
        </button>
    </div>
  )
})
