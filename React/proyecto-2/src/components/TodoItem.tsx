import { useParams } from "react-router-dom"
import { useCallback, useContext, useState } from "react"
import { TodoContext } from "../context/TodoContext"
import { useNavigate } from "react-router-dom"

export const TodoItem = () => {
    const { id } = useParams()
    const { todos, setTodos } = useContext(TodoContext)!
    const todo = todos[Number(id)]
    const navigate = useNavigate()

    const [editedTask, setEditedTask] = useState(todo.task)
    const [editedDescription, setEditedDescription] = useState(todo.description)
    const [editCheck, setEditCheck] = useState(todo.completed)

    const handleUpdate = useCallback(() => {
        const updatedTodos = todos.map((t, i) => 
            i === Number(id) ? { 
                ...t, 
                task: editedTask,
                description: editedDescription,
                completed: editCheck
            } : t
        )
        setTodos(updatedTodos)
        localStorage.setItem("todos", JSON.stringify(updatedTodos))
        navigate(`/`)
    }, [todos, setTodos, id])

    const handleClick = useCallback(() => {
        const updatedTodos = todos.map((t, i) => 
            i === Number(id) ? { ...t, completed: !t.completed } : t
        )
        setTodos(updatedTodos)
        localStorage.setItem("todos", JSON.stringify(updatedTodos))
    }, [todos, setTodos, id])

    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Editar tarea</h2>
                <div className="space-y-6">
                    <div className="flex justify-between items-center">
                        <input
                            type="text"
                            value={editedTask}
                            onChange={(e) => setEditedTask(e.target.value)}
                            className="text-2xl font-bold text-gray-800 bg-transparent border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none w-full"
                        />
                        <button 
                            onClick={() => navigate('/')}
                            className="text-gray-600 hover:text-gray-800 cursor-pointer ml-4"
                        >
                            ← Volver
                        </button>
                    </div>
                    
                    <div className="pt-4">
                        <h3 className="text-sm font-medium text-gray-500 mb-2">Descripción</h3>
                        <textarea
                            value={editedDescription}
                            onChange={(e) => setEditedDescription(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                        />
                    </div>

                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault()
                                    setEditCheck(!todo.completed)
                                    handleClick()
                                }
                            }}
                            checked={todo.completed}
                            onChange={handleClick}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="text-sm font-medium text-gray-700">
                            {todo.completed ? "Completada" : "Pendiente"}
                        </span>
                    </div>

                    <div className="flex justify-end">
                        <button
                            onClick={handleUpdate}
                            className="px-4 py-2 cursor-pointer rounded-md text-white bg-blue-600 hover:bg-blue-900 transition duration-200"
                        >
                            Actualizar Valores
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}