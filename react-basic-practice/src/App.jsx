import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { LoadingProvider } from './contexts/loading';
// import Routing from './Routing';

const App = () => (
  <div className="App">
    <Router>
      <LoadingProvider>
        {/* <Routing /> */}
        <HomePage />
      </LoadingProvider>
    </Router>
  </div>
);

export default App;
