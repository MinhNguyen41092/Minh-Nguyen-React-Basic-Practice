import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoadingProvider } from './contexts/loading';
import Routing from './Routing';
import ProductCard from './components/ProductCard';

function App() {
  const product = {
    id: 1,
    name: 'Lira Earrings',
    img: 'https://res.cloudinary.com/dkmkpyi0t/image/upload/v1672279122/Lira_Earrings_wp6hdu.png',
    price: 25,
    label: '- %21',
  };
  return (
    <div className="App">
      <Router>
        {/* <LoadingProvider>
          <Routing />
        </LoadingProvider> */}
        <ProductCard
          product={product}
        />
      </Router>
    </div>
  );
}

export default App;
