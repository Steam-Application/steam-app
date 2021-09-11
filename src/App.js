import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/routes/Routes.js';

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;