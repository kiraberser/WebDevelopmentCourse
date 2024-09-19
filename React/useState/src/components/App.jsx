import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const handleChange = (e) => {
    const {name, value} = e.target
    setContact((prevValue) => ({
      ...prevValue,
      [name]: value
    }))
  }

  const handleClick = (e) => {
    alert(`Enviando la siguiente información: \nNombre: ${contact.fName} \nApellido: ${contact.lName} \nEmail: ${contact.email}`)
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handleChange} value={contact.fName} className="placeholder-slate-300"name="fName" placeholder="First Name" />
        <input onChange={handleChange} value={contact.lName} className="placeholder-slate-300"name="lName" placeholder="Last Name" />
        <input onChange={handleChange} value={contact.email} className="placeholder-slate-300"name="email" placeholder="Email" />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;

