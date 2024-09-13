import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia"

function createCard(emojiData){
  return (
    <Entry
      key={emojiData.id}
      emoji={emojiData.emoji}
      name={emojiData.name}
      meaning={emojiData.meaning}
    />
  )
}

function App(props) {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <div className="flex flex-wrap justify-center ">
        {emojipedia.map(createCard)}
      </div>
    </div>
  );
}

export default App;
