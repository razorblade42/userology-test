import logo from './logo.svg';
import './App.css';
import './Modal.css';
import Modal from './Modal';
import React, { useState } from 'react';
function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => setShowModal(true)}
        className='button'>Open Modal</button>
      {showModal &&
        <div className='modalContainer'>
          <Modal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          />
        </div>
      }
    </div>
  );
}

export default App;
