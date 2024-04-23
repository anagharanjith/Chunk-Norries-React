import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddFact = ({ onAddFact }) => {
  const [newFact, setNewFact] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddFact(newFact);
    setNewFact('');
    toast.success("Fact Added Successfully...")
  };

  return (
    <div>
      <h4><i className="fa-solid fa-plus"></i> Add Fact</h4>
      <form onSubmit={handleSubmit}>
      <div className='d-flex'>
        <input className='form-control' type="text" value={newFact} onChange={(e) => setNewFact(e.target.value)} />
        <button className='btn btn-primary' type="submit">Add</button>
      </div>
      </form>
      <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
    </div>
  
  );
};

export default AddFact;
