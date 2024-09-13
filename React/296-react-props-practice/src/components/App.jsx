import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";


function createCard(contact){
  return (
    <Card 
      key={contact.id}
      id={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
    
  )
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar 
        img={"https://imgs.search.brave.com/3l2TYFmyu4f6TrBDGtgnnt-3C9yksgONpdt5ecdDRjM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yYXJl/LWdhbGxlcnkuY29t/L3VwbG9hZHMvcG9z/dHMvNTEwNTg3LWJl/cnNlcmsuanBn"}
      />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
