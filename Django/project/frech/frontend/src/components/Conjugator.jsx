import React, { useState } from 'react';
import { conjugateVerb } from '../api/conjugations';

const Conjugator = () => {
  const [verb, setVerb] = useState('');
  const [tense, setTense] = useState('present');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const conjugation = await conjugateVerb(verb, tense);
      setResult(conjugation);
    } catch (error) {
      setResult('Error conjugating verb');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={verb}
          onChange={(e) => setVerb(e.target.value)}
          placeholder="Enter verb"
          className="w-full p-2 border rounded"
        />
        <select
          value={tense}
          onChange={(e) => setTense(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="present">Present</option>
          <option value="passecompose">Passé Composé</option>
          <option value="futursimple">Futur Simple</option>
        </select>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Conjugate
        </button>
      </form>
      {result && (
        <div className="mt-4 p-4 border rounded">
          <pre>{result}</pre>
        </div>
      )}
    </div>
  );
};

export default Conjugator;