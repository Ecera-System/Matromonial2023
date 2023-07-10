import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import Header from './components/Header';
import './Footer';
import Footer from './Footer';
const App = () => {
  return (
    
    <Router>
    
   <Header />
      
      <Routes />
      <Footer />
    </Router>
  );
};

export default App;
