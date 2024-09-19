import React from 'react'
import { useState } from 'react'

function InputArea(props) {
    const [todo, addTodo] = useState("")

    const handleChange = (e) => {
        addTodo(e.target.value)
    }

    const handleClick = () => {
        if (todo.trim()) {
            props.onAdd((prevValue) => [...prevValue, todo])
            addTodo("")
            }
        }
    return (
        <div className="form">
            <input 
                onChange={handleChange}
                type="text"
                value={todo}
                name="item"
                onKeyPress={(e) => e.key === "Enter" && handleClick()}
            />
            <button onClick={handleClick}>
                <span>Add</span>
            </button>
        </div>
    )
}

export default InputArea
