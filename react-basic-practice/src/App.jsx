import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignUpPage from './page/SignUpPage';

function App() {
  return (
    <div className="App">
      <Router>
        <SignUpPage />
      </Router>
    </div>
  );
}

export default App;
