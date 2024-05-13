import React, { useState } from 'react';
import PasswordGenerator from './components/Generator/PasswordGenerator';
import PasswordValidator from './components/Validator/PasswordValidator';

function App() {
  const [activeComponent, setActiveComponent] = useState('generator'); // 'generator' или 'validator'

  return (
    <div>
      <div>
        <button style={{
          border: 0,
          outline: 0,
          background: '#019f55',
          color: '#fff',
          fontSize: '22px',
          fontWeight: 300,
          padding: '16px 26px',
          marginBottom: 150,
          marginRight: 10,
          borderRadius: '5px',
          cursor: 'pointer'
          }}
          onClick={() => setActiveComponent('generator')}>Generate Password</button>
        <button style={{
          border: 0,
          outline: 0,
          background: '#019f55',
          color: '#fff',
          fontSize: '22px',
          fontWeight: 300,
          padding: '16px 26px',
          margin: '10px',
          borderRadius: '5px',
          cursor: 'pointer'
          }}
          onClick={() => setActiveComponent('validator')}>Validate Password</button>
      </div>
      {activeComponent === 'generator' && <PasswordGenerator />}
      {activeComponent === 'validator' && <PasswordValidator />}
    </div>
  );
}

export default App;
