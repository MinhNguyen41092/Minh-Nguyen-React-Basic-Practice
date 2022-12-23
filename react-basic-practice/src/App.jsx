import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoadingProvider } from './contexts/loading';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <LoadingProvider>
      <div className="App">
        <Router>
          <SignUpPage />
        </Router>
      </div>
    </LoadingProvider>
  );
}

export default App;
