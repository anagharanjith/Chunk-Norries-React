import React, { useState, useEffect } from 'react';
import './App.css'

const JokeCard = ({ joke }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px' }}>
      <p>{joke}</p>
    </div>
  );
};

const ChuckNorrisJokes = () => {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      if (!response.ok) {
        throw new Error('Failed to fetch joke');
      }
      const data = await response.json();
      setJoke(data.value);
    } catch (error) {
      console.error('Error fetching Chuck Norris joke:', error);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  const handleRefresh = () => {
    fetchJoke();
  };

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <JokeCard joke={joke} />
        <button className='btn btn1 p-3' onClick={handleRefresh}>Press to Laugh</button>
      </div>
    </div>
  );
};

export default ChuckNorrisJokes;
