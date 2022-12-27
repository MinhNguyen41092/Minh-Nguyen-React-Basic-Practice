import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoadingProvider } from './contexts/loading';
import Routing from './Routing';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <LoadingProvider>
          <Routing />
        </LoadingProvider> */}
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
