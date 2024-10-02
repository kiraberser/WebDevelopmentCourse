import React from 'react'
import Conjugator from './components/Conjugator'

function App() {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>French Verb Conjugator</h1>
      <Conjugator />
    </div>
  );
}

export default App
