import React, { useState } from "react";
import toast, {Toaster} from "react-hot-toast";
import AddIcon from "@mui/icons-material/Add";
import { Zoom } from "@mui/material";

function CreateArea({onAdd}) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  })
  const [contentField, setContentField] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd(note)
    add()
    console.log(note)
    setNote({
      title: '', content: ''
    })
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setNote(prevValue => ({
      ...prevValue,
      [name]: value
    }))
  }

  const add = () => toast("Note Created", {
    position: 'bottom-right',
    icon: '✔️',
    style: {background: '#fff', color: 'green'},
    iconTheme: '#fff'
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} value={note.title}  onClick={() => setContentField(true)}required/>
        {contentField && (
          <>
            <textarea
              name="content"
              placeholder="Take a note..."
              rows="3"
              onChange={handleChange}
              value={note.content}
              required
            />
            <Zoom in={true}>
              <button className="hover:bg-gray-300">
                <AddIcon />
              </button>
            </Zoom>
            <Toaster />
          </>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
