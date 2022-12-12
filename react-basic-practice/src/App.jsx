import React from 'react';
import Input from './components/common/input/index';

function App() {
  return (
    <div className="App">

      <h1>Vite + React</h1>
      <Input
        label="Name"
        htmlFor="inputText"
        name="Name"
        idInput="input-name"
        classNameInput="input input-login"
        placeholder="Nguyen Minh"
      />
    </div>
  );
}

export default App;
