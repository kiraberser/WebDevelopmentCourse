import { createContext, useState, ReactNode, useEffect } from "react"

interface TodoAppProps {
    task: string;
    description: string;
    completed: boolean;
}

interface TodoContextType {
    todos: TodoAppProps[];
    setTodos: React.Dispatch<React.SetStateAction<TodoAppProps[]>>;
}

const defaultValues: TodoAppProps = {
    task: '',
    description: '',
    completed: false
}

export const TodoContext = createContext<TodoContextType | null>(null)

export const TodoProvider = ({ children }: { children: ReactNode }) => {
    const [todos, setTodos] = useState<TodoAppProps[]>([defaultValues])

    useEffect(() => {
        const storedTodos = localStorage.getItem("todos")
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos))
        }
    }, [])

    return (
        <TodoContext.Provider value={{ todos, setTodos }}>
            {children}
        </TodoContext.Provider>
    )
} 