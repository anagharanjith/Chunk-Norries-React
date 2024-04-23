import React, { useState } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap'
import AddFact from './Add';
import ReadFacts from './ReadFacts';
import UpdateFact from './UpdateFact';
import DeleteFact from './DeleteFact';
import ChuckNorrisJokes from './ChuckNorries';

const App = () => {
  const [facts, setFacts] = useState([]);

  const handleAddFact = (newFact) => {
    setFacts([...facts, newFact]);
  };

  const handleUpdateFact = (index, updatedFact) => {
    const updatedFacts = [...facts];
    updatedFacts[index] = updatedFact;
    setFacts(updatedFacts);
  };

  const handleDeleteFact = (index) => {
    const updatedFacts = facts.filter((fact, i) => i !== index);
    setFacts(updatedFacts);
  };

  return (
    <div>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">ChuckNorriesFacts</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
      <div className='container mt-5'>
        <ChuckNorrisJokes/>
        <div className="mt-3 mb-3 w-50 d-flex justify-content-center">
        <AddFact onAddFact={handleAddFact} />
        </div>
        <div className='d-flex justify-content-around mt-3'>
          <ReadFacts facts={facts} />
          <UpdateFact facts={facts} onUpdateFact={handleUpdateFact} />
          <DeleteFact facts={facts} onDeleteFact={handleDeleteFact} />
        </div>
      </div>
    </div>
  );
};

export default App;
