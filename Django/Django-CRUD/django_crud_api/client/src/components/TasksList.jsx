import { useEffect, useState } from "react"
import { getAllTasks } from "../api/tasks.api"
import TaskCard from "./TaskCard"

function TasksList() {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        async function loadTasks() {
            const res = await getAllTasks()
            setTasks(res.data)
        }
        loadTasks()
    }, [])

  return (
    <div className="grid grid-cols-3 gap-3">
        {tasks.map(task => (
            <TaskCard 
                task={task}
                key={task.id}
            />
        ))}
    </div>
  )
}

export default TasksList 