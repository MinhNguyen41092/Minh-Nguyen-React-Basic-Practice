import React from 'react';
import './App.css';
import Button from './components/common/button/button';

function App() {
  return (
    <div className="App">

      <h1>Vite + React</h1>
      <Button
        className="btn btn-primary"
        text="button"
      />
    </div>
  );
}

export default App;
