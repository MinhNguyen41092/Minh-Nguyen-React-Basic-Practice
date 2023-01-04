import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Grid from './layouts/Grid';
import ProductCard from './components/ProductCard';
// import { LoadingProvider } from './contexts/loading';
// import Routing from './Routing';

function App() {
  const product1 = {
    id: 1,
    name: 'Lira Earrings',
    img: 'https://res.cloudinary.com/dkmkpyi0t/image/upload/v1672279122/Lira_Earrings_wp6hdu.png',
    price: 25,
    label: '- %21',
  };
  return (
    <div className="App">
      <Router>
        {/* <LoadingProvider> */}
        {/* <Routing /> */}
        {/* </LoadingProvider> */}
        <Grid
          columns="3"
          columnGap="large"
          rowGap="large"
        >
          <ProductCard product={product1} />
          <ProductCard product={product1} />
          <ProductCard product={product1} />
          <ProductCard product={product1} />
          <ProductCard product={product1} />
          <ProductCard product={product1} />
        </Grid>
      </Router>
    </div>
  );
}

export default App;
