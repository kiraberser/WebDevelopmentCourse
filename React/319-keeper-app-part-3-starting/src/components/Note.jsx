import React, { useState } from "react";
import toast, {Toaster} from 'react-hot-toast'
import DeleteIcon from "@mui/icons-material/Delete";

function Note({title, content, index, onDelete}) {
  const handleDelete = () => {
    onDelete(index)
    toast('Note deleted', {
      position: 'bottom-right',
      style: {background: 'white', color: 'red'},
      icon: '❌',
    })
  }
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleDelete} >
        <DeleteIcon/>
      </button>
    </div>
  );
}

export default Note;
