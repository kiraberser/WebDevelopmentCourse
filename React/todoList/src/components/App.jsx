import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [item, setItems] = useState([])

  function deletItem(id) {
    setItems((prevValue) => {
      return prevValue.filter((items, index) => {
        return index !== id
      })
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea 
        onAdd={setItems}
      />
      <div>
        <ToDoItem 
          items={item}
          onChecked={deletItem}
        />
      </div>
    </div>
  );
}

export default App;

