import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoadingProvider } from './contexts/LoadingProvider';
import { ToastProvider } from '@/contexts/ToastProvider';
import { CartProvider } from './contexts/CartProvider';
import { AuthProvider } from './contexts/AuthProvider';
import Routing from './Routing';

const App = () => (
  <div className="App">
    <Router>
      <LoadingProvider>
        <ToastProvider>
          <AuthProvider>
            <CartProvider>
              <Routing />
            </CartProvider>
          </AuthProvider>
        </ToastProvider>
      </LoadingProvider>
    </Router>
  </div>
);

export default App;
