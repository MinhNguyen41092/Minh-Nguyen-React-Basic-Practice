import React from 'react';
import { Button, IconButton } from './components/common/Button';

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
