import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoadingProvider } from './contexts/LoadingProvider';
import { ToastProvider } from '@/contexts/ToastProvider';
import Routing from './Routing';
import CartBar from './components/CartBar';

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
          <CartBar />
          {/* <Routing /> */}
        </ToastProvider>
      </LoadingProvider>
    </Router>
  </div>
);

export default App;
