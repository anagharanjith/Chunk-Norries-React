import React, { useState } from 'react';

const UpdateFact = ({ facts, onUpdateFact }) => {
  const [updatedFact, setUpdatedFact] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleSelectFact = (index) => {
    setSelectedIndex(index);
    setUpdatedFact(facts[index]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedIndex !== null) {
      onUpdateFact(selectedIndex, updatedFact);
      setSelectedIndex(null);
      setUpdatedFact('');
    }
  };

  return (
    <div className='m-2'>
      <h4><i className="fa-regular fa-pen-to-square"></i>Update Fact</h4>
      <form onSubmit={handleSubmit}>
        <select className='form-select' onChange={(e) => handleSelectFact(e.target.value)}>
          <option value="">Select a fact to update</option>
          {facts.map((fact, index) => (
            <option key={index} value={index}>
              {fact}
            </option>
          ))}
        </select>
        {selectedIndex !== null && (
          <div className='d-flex'>
            <input className='form-control' type="text" value={updatedFact} onChange={(e) => setUpdatedFact(e.target.value)} />
            <button className='btn btn-warning' type="submit">Update</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default UpdateFact;
