import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoadingProvider } from './contexts/LoadingProvider';
import { ToastProvider } from '@/contexts/ToastProvider';
import Routing from './Routing';

const App = () => (
  <div className="App">
    <Router>
      <LoadingProvider>
        <ToastProvider>
          <Routing />
        </ToastProvider>
      </LoadingProvider>
    </Router>
  </div>
);

export default App;
