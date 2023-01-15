import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoadingProvider } from './contexts/LoadingProvider';
import { ToastProvider } from '@/contexts/ToastProvider';
import { CartProvider } from './contexts/CartProvider';
import Routing from './Routing';
import HomePage from './pages/HomePage';

const App = () => (
  <div className="App">
    <Router>
      <LoadingProvider>
        <ToastProvider>
          <CartProvider>
            {/* <Routing /> */}
            <HomePage />
          </CartProvider>
        </ToastProvider>
      </LoadingProvider>
    </Router>
  </div>
);

export default App;
