import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './layouts/Header';
// import { LoadingProvider } from './contexts/loading';
// import Routing from './Routing';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <LoadingProvider> */}
        {/* <Routing /> */}
        {/* </LoadingProvider> */}
        <Header />
      </Router>
    </div>
  );
}

export default App;
