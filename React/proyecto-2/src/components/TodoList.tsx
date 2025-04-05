import { useMemo, useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../context/TodoContext";
import toast, { Toaster } from 'react-hot-toast'

interface TodoAppProps {
    task: string;
    description: string;
    completed: boolean;
}

interface TodoListProps {
    filter?: 'completed' | 'pending' | 'all';
}

const TodoList = ({ filter }: TodoListProps) => {
    const { todos, setTodos } = useContext(TodoContext)!

    const handleClickEdit = useCallback((index: number) => {
        const updatedTodos = todos.map((t: TodoAppProps, i: number) =>
            i === index ? { ...t, completed: !t.completed } : t
        )
        setTodos(updatedTodos)
        localStorage.setItem("todos", JSON.stringify(updatedTodos))
    }, [todos, setTodos])

    const handleClickRemove = useCallback((index: number) => {
        toast.success('Eliminado Correctamente', {
            icon: '🗑️',
            duration: 3000
        })
        const deleteTodos = todos.filter((_, i: number) => i !== index)
        setTodos(deleteTodos)

        localStorage.setItem("todos", JSON.stringify(deleteTodos))

    }, [todos, setTodos])

    const filteredTodos = useMemo(() => {
        return todos.filter((todo, index) => {
            if (index === 0) return false;
            if (filter === 'completed') return todo.completed;
            if (filter === 'pending') return !todo.completed;
            return todo;
        });
    }, [todos, filter])

    return (
        <div className="container mx-auto p-4">
            {filteredTodos.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {filteredTodos.map((todo: TodoAppProps, index: number) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200">
                            <div className="flex">
                                <Link to={`/todo/${index + 1}`} className="block">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{todo.task}</h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{todo.description}</p>
                                </Link>
                                <div className="ml-auto">

                                    <button
                                        className="cursor-pointer"
                                        onClick={() => handleClickRemove(index + 1)}
                                    >
                                        🗑️
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between border-t pt-3">
                                <span className="text-sm text-gray-500">
                                    Completar
                                </span>
                                <input
                                    type="checkbox"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault()
                                            handleClickEdit(index + 1)
                                        }
                                    }}
                                    checked={todo.completed}
                                    onChange={() => handleClickEdit(index + 1)}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center p-8">
                    <p className="text-gray-500 text-lg">No hay todos para mostrar</p>
                </div>
            )}
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
        </div>
    )
}

export default TodoList
