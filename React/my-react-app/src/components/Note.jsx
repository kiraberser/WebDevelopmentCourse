import React from 'react'

function Note(props) {
  return (
    <div>
        <div className='p-2 w-72 bg-slate-100 rounded-md m-5 shadow-lg '>
            <p className='font-bold text-left'>{props.title}</p>
            <p className='text-left'>{props.description}</p>
        </div>
    </div>
    
  )
}

export default Note  