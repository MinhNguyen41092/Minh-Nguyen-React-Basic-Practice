import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoadingProvider } from './contexts/LoadingProvider';
import { PopupProvider } from '@/contexts/ToastProvider';
import Routing from './Routing';

const App = () => (
  <div className="App">
    <Router>
      <LoadingProvider>
        <PopupProvider>
          <Routing />
        </PopupProvider>
      </LoadingProvider>
    </Router>
  </div>
);

export default App;
