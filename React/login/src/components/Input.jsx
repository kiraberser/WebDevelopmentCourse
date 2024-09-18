import React from 'react'

function Input(props) {
  return (
    <div>
      <input type={props.type} placeholder={props.placeholder} className="placeholder-slate-200"/>
    </div>
  )
}

export default Input
