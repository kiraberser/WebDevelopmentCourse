import {BrowserRouter, Routes, Route} from "react-router-dom"
import { TodoApp, AddTodo, TodoItem, TodoError, Navbar } from "../components"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<TodoApp/>} />
                <Route path="/*" element={<TodoError/>}/>
                <Route path="/addTodo" element={<AddTodo/>}/>
                <Route path="/todo/:id" element={<TodoItem/>}/>
                <Route path="/completed" element={<TodoApp filter="completed"/>}/>
                <Route path="/pending" element={<TodoApp filter="pending"/>}/>
            </Routes>
        </BrowserRouter>
    )
}