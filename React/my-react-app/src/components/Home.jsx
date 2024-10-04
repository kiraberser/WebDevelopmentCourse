import React from 'react';
import notes from '../notes'; 
import Note from './Note';

function Home() {
  return (
    <div>
      <div className='flex flex-row flex-wrap'>
        {notes.map(note => (
          <Note
            key={note.key} // Asegúrate de usar una clave única
            title={note.title}
            description={note.content}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
