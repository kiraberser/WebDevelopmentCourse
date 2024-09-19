import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState({
    fname: "",
    lname: ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setHeadingText((prevValue) => ({
      ...prevValue,
      [name]: value
    }))
  }

  const handleClick = (e) => {
    e.preventDefault()
    
  }

  return (
    <div className="container">
      <h1>
        Hello {headingText.fname} {headingText.lname}
      </h1>
      <form>
        <input
          className="placeholder-slate-300"
          onChange={handleChange}
          name="fname" 
          placeholder="First Name" 
          value={headingText.fname}
        />
        <input 
          className="placeholder-slate-300"
          onChange={handleChange}
          name="lname" 
          placeholder="Last Name" 
          value={headingText.lname}
        />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;


