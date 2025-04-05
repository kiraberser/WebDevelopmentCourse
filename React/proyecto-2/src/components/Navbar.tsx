import { useContext } from "react"
import { Link } from "react-router-dom"
import { TodoContext } from "../context/TodoContext"

export const Navbar = () => {
    const { todos } = useContext(TodoContext)!

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex space-x-4">
                    <Link
                        to="/"
                        className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Todos
                    </Link>
                    {todos.length > 1 && (
                        <>
                            <Link
                                to="/completed"
                                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Completados
                            </Link>
                            <Link
                                to="/pending"
                                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Pendientes
                            </Link>
                        </>
                    )}
                </div>
                <div className="flex space-x-4">
                    <Link
                        to="/addTodo"
                        className="text-white bg-blue-600  px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Agregar Todo
                    </Link>
                </div>
            </div>
        </nav>
    )
}