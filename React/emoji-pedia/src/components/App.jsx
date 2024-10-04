import React, { useState } from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia"

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <div className="flex flex-wrap justify-center ">
        {emojipedia.map(
          emojiData => (
            <Entry
              key={emojiData.id}
              emoji={emojiData.emoji}
              name={emojiData.name}
              meaning={emojiData.meaning}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
