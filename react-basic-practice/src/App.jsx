import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoadingProvider } from '@/contexts/LoadingProvider';
import { ToastProvider } from '@/contexts/ToastProvider';
import { CartProvider } from '@/contexts/CartProvider';
import { AuthProvider } from '@/contexts/AuthProvider';
import Routing from './Routing';

const App = () => (
  <div className="App">
    <Router>
      <AuthProvider>
        <LoadingProvider>
          <ToastProvider>
            <CartProvider>
              <Routing />
            </CartProvider>
          </ToastProvider>
        </LoadingProvider>
      </AuthProvider>
    </Router>
  </div>
);

export default App;
