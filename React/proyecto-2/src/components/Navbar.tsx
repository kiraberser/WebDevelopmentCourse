import { useContext } from "react"
import { Link } from "react-router-dom"
import { TodoContext } from "../context/TodoContext"

export const Navbar = () => {
    const { todos } = useContext(TodoContext)!

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
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
                    <div className="w-full md:w-auto">
                        <Link
                            to="/addTodo"
                            className="block w-full md:w-auto text-center text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-sm font-medium transition duration-200"
                        >
                            Agregar Todo
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}