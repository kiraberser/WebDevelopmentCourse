import React, { useState } from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia"

function App(props) {
  const [like, setLike] = useState(0);

  const incrementar = () => {
    setLike(like + 1)
  }
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <div className="flex flex-wrap justify-center ">
        {emojipedia.map(emojiData => ( <Entry key={emojiData.id} emoji={emojiData.emoji} name={emojiData.name} meaning={emojiData.meaning}/>))}
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-10" onClick={incrementar}>
          Click aquí
        </button>
        <p>Diste click en {like}</p>   
      </div>
    </div>
  );
}

export default App;
