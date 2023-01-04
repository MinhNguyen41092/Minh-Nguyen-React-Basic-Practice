import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { getListProductsLimit } from './services/Products';
import ListProducts from './components/ListProducts';
// import { LoadingProvider } from './contexts/loading';
// import Routing from './Routing';

const App = async () => {
  const data = await getListProductsLimit(1);
  // console.log(data);
  return (
    <div className="App">
      <Router>
        {/* <LoadingProvider> */}
        {/* <Routing /> */}
        {/* </LoadingProvider> */}
        <ListProducts data={data} />
      </Router>
    </div>
  );
};

export default App;
