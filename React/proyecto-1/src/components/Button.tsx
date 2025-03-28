
// Se declara un interface para definir las propiedades que se van a recibir
// Se recibe un string y una funcion que se ejecutara al hacer click en el boton

// Tipado de typescript
// Se declara un interface para definir las propiedades que se van a recibir
interface Props {
    label: string;
    parentMethod: () => void;
}

export const Button = ({label, parentMethod}: Props ) => {
  return (
    <div>
        <button className="bg-sky-500 hover:bg-sky-700 p-2 w-50 border rounded-md m-3" onClick={parentMethod}>
            {label}
        </button>
    </div>
  )
}
