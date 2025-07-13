import { type ReactNode } from "react"
import { Link } from "react-router-dom"

import { useNavigate } from "react-router-dom"

// Corrige la definición de props para aceptar children correctamente
type ModalProps = {
  children: ReactNode
}

const Modal = ({ children }: ModalProps) => {

  const navigate = useNavigate()

  const closeHandler = () => {
    navigate('..')
  }

return (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
    onClick={closeHandler}
  >
    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
      <Link
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
        to='/'
        aria-label="Cerrar modal"
      >
        X
      </Link>
      {children}
    </div>
  </div>
);
}

export default Modal