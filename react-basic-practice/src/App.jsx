import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoadingProvider } from './contexts/loading';
import Routing from './Routing';
import Footer from './layouts/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <LoadingProvider>
          {/* <Routing /> */}
          <Footer />
        </LoadingProvider>
      </Router>
    </div>
  );
}

export default App;
