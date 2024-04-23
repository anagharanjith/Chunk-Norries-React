import React from 'react';

const DeleteFact = ({ facts, onDeleteFact }) => {
  return (
    <div className='m-2'>
      <h4><i className="fa-solid fa-eraser"></i>Delete Fact</h4>
      <ul>
        {facts.map((fact, index) => (
          <li key={index}>
            {fact}
            <button className='btn btn-danger btn-sm' onClick={() => onDeleteFact(index)}><i className="fa-solid fa-trash"></i></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteFact;
