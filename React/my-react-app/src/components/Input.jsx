import React from 'react';

function Input(props) {
  return (
    <div>
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        className={`input input-bordered w-full h-12 ${props.className}`} // Establece la altura aquí
      />
    </div>
  );
}

export default Input;

