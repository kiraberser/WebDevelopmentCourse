import { FormEvent, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast'

interface TodoAppProps {
    task: string;
    description: string;
    completed: boolean;
}

export const AddTodo = () => {
    const { todos, setTodos } = useContext(TodoContext)!
    const navigate = useNavigate()

    const addTodo = (task: string, description: string) => {
        const newTodo: TodoAppProps = {
            task,
            description,
            completed: false
        }
        setTodos(prevTodos => [...prevTodos, newTodo])
        localStorage.setItem("todos", JSON.stringify([...todos, newTodo]))
    }
    

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)
        const task = formData.get('task') as string
        const description = formData.get('description') as string
        
        if (task && description) {
            addTodo(task, description)
            form.reset()
        }
        toast.success('Agregado correctamente', {
            icon: '✅', 
            style: { 
                backgroundColor: '#5F8B4C',
                color: 'white'
            }
        })
        navigate('/')
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Agregar Nueva Tarea</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="task" className="block text-sm font-medium text-gray-700 mb-1">
                            Título
                        </label>
                        <input 
                            id="task"
                            name="task" 
                            placeholder="Ingresa el título de la tarea" 
                            required 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                            Descripción
                        </label>
                        <input 
                            id="description"
                            name="description" 
                            placeholder="Ingresa la descripción" 
                            required 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Agregar Tarea
                    </button>
                </form>
                <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
            </div>
        </div>
    )
}
