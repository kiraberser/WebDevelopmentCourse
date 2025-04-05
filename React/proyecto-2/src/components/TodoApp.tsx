import TodoList from "./TodoList";

interface TodoAppProps {
    filter?: 'completed' | 'pending';
}

export const TodoApp = ({ filter }: TodoAppProps) => {
    return(
        <div>
            <TodoList filter={filter}/>
        </div>
    )
}