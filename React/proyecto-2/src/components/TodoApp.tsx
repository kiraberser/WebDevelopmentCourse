import TodoList from "./TodoList";

interface TodoAppProps {
    filter?: 'completed' | 'pending' | 'all';
}

export const TodoApp = ({ filter }: TodoAppProps) => {
    return(
        <div>
            <TodoList filter={filter}/>
        </div>
    )
}