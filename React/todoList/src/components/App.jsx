import React, { useState } from "react";

function App() {
  const [todo, addTodo] = useState({item: ""})
  const [items, setItems] = useState([])

  const handleSubmit = (e) => {
    const {name, value} = e.target
    addTodo(() => ({
      [name]: value
    }))
  }
  const handleClick = () => {
    if (todo.item.trim()) {
      setItems((prevValue) => [...prevValue, todo.item])
      addTodo({item: ""})
    }
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
          onChange={handleSubmit}
          type="text"
          value={todo.item}
          name="item"
          onKeyPress={(e) => e.key === "Enter" ? handleClick() : null}
        />
        <button 
          onClick={handleClick}
        >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <li className="list-disc ml-10" key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

