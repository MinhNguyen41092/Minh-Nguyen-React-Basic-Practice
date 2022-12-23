import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoadingProvider } from './contexts/loading';
// import SignUpPage from './pages/SignUpPage';
import Routing from './Routing';

function App() {
  return (
    <div className="App">
      <Router>
        <LoadingProvider>
          <Routing />
        </LoadingProvider>
      </Router>
    </div>
  );
}

export default App;
