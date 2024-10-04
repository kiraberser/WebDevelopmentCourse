import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de tener esta importación

function Header() {
  return (
    <div className='flex justify-between text-white p-5 text-4xl font-bold shadow-lg' style={{background: "#f5ba13"}}>
      <Link to={'/'}>
        <h1>Keeper</h1>
      </Link>
      <div className='flex justify-end items-end'>
        {/* Link para la redirección */}
        <Link to='/create-task'>
          <button className='bg-white p-1 rounded-md' style={{color: "#f5ba13"}}>Create</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
