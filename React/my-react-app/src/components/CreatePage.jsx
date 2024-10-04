import { useState } from 'react';
import Input from './Input';

function CreatePage() {
  const [value, SetValue] = useState({
    title: '',
    content: ''
  });

  const handleChange = (e) => {
    SetValue({
      ...value,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <form className='flex items-center justify-center h-screen flex-col gap-5 px-5' onSubmit={handleSubmit}>
  <div className='w-full max-w-lg'>
    <Input
      name="title"
      type="text"
      placeholder="Enter Title"
      onChange={handleChange}
      value={value.title}
      className='h-12' // Mantiene la misma altura que el botón
    />
  </div>
  <div className='w-full max-w-lg'>
    <Input
      name="content"
      type="text"
      placeholder="Enter Content"
      onChange={handleChange}
      value={value.content}
      className='textarea textarea-bordered h-32' // Asegúrate de que el textarea tenga suficiente altura
    />
  </div>
  <button type="submit" className='bg-yellow-500 p-3 rounded-md text-white w-full max-w-lg h-12'>Create</button>
</form>



  );
}

export default CreatePage;
