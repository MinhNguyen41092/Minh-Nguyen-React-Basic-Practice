import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoadingProvider } from './contexts/loading';
import Routing from './Routing';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <LoadingProvider>
          <Routing />
        </LoadingProvider> */}
        <ProductCard
          product = {
            id: 
          }
        />
      </Router>
    </div>
  );
}

export default App;
