import React from 'react'

function Note() {
  return (
    <div className='flex flex-row'>
        <div className='p-2 w-48 h-20 bg-slate-100 rounded-md m-5 shadow-lg '>
            <p className='font-bold text-left'>This is the note title</p>
            <p className='text-left'>This is the note content</p>
        </div>
        <div className='p-2 w-48 h-20 bg-slate-100 rounded-md m-5 shadow-lg '>
            <p className='font-bold text-left'>This is the note title</p>
            <p className='text-left'>This is the note content</p>
        </div>
    </div>
    
  )
}

export default Note  