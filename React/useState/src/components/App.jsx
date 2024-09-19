import { useState } from "react";

function App() {
  //Create 3 states, 1.- Use the text, 2.- set the name and 3.- the background
  const [headingText, setHeadingText] = useState("")
  const [name, setName] = useState("")
  const [backgroundColor, setBackgroundColor] = useState("")

  //When we want to clear the field input, after put the variable we can call setName  
  const handleSubmit = () => {
    setHeadingText(name)
    setName("")
  }
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
    <form onSubmit={(e) => e.preventDefault()}> 
      <input 
        onChange={(e) => setName(e.target.value)}
        type="text" 
        placeholder="What's your name?" 
        value={name}
      />
      <button
        onClick={handleSubmit}
        onMouseOver={() => setBackgroundColor('black')}
        onMouseOut={() => setBackgroundColor('white')}
        onKeyPress={(e) => e.key === 'Enter' ? setHeadingText(name) : null}
        style={{backgroundColor: backgroundColor, color: '#50a3a2'}}
        type="submit"
        >
          Submit
      </button>
      </form>
    </div>
  );
}
export default App;

