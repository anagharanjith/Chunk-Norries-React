import React from 'react';

const ReadFacts = ({ facts }) => {
  return (
    <div className='m-2' style={{ marginTop: '20px', width: '18rem' }}>
      <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '10px' }}>
        <h4>Added Facts</h4>
        <hr />
        {facts.map((fact, index) => (
          <div key={index} style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '10px', marginBottom: '5px' }}>
            <p>{fact}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadFacts;
