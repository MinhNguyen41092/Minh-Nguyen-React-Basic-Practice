import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ListProducts from './components/ListProducts';
// import { LoadingProvider } from './contexts/loading';
// import Routing from './Routing';

const App = () => (
  <div className="App">
    <Router>
      {/* <LoadingProvider> */}
      {/* <Routing /> */}
      {/* </LoadingProvider> */}
      <ListProducts />
    </Router>
  </div>
);

export default App;
