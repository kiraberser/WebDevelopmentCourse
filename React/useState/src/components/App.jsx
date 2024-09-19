import { useState } from "react"


function App() {
  setInterval(updateTime, 1000)

  let time = new Date().toLocaleTimeString()
  const [now, getTime] = useState(time)
  function updateTime() {
    let newTime = new Date().toLocaleTimeString()
    getTime(newTime)
  }
  return(
    <div>
      <h1>{now}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  )
}

export default App

