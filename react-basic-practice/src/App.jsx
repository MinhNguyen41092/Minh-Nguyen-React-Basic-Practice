import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoadingProvider } from './contexts/loading';
import DetailProductPage from './pages/DetailProductPage';
// import Routing from './Routing';

const App = () => (
  <div className="App">
    <Router>
      <LoadingProvider>
        {/* <Routing /> */}
        <DetailProductPage id="1" />
      </LoadingProvider>
    </Router>
  </div>
);

export default App;
