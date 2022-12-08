import React from 'react';
import './App.css';
import Button from './components/common/button/button';
import IconButton from './components/common/button/iconButton';

function App() {
  return (
    <div className="App">

      <h1>Vite + React</h1>
      <Button
        className="btn btn-primary btn-large"
        text="button"
      />

      <IconButton
        className="btn"
        icon="src/assets/images/iconButton/Vector.png"
      />
    </div>
  );
}

export default App;
