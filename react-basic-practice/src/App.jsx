import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoadingProvider } from './contexts/LoadingProvider';
import { ToastProvider } from '@/contexts/ToastProvider';
import Routing from './Routing';
import CartItem from './components/CartItem';

const item = {
  id: 1,
  name: 'yuki hair pin set of 3',
  quantity: 3,
  price: '33.00',
};

const App = () => (
  <div className="App">
    <Router>
      <LoadingProvider>
        <ToastProvider>
          <CartItem item={item} />
          {/* <Routing /> */}
        </ToastProvider>
      </LoadingProvider>
    </Router>
  </div>
);

export default App;
