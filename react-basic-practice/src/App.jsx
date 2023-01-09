import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoadingProvider } from './contexts/loading';
import Routing from './Routing';

const App = () => (
  <div className="App">
    <Router>
      <LoadingProvider>
        <Routing />
      </LoadingProvider>
    </Router>
  </div>
);

export default App;
