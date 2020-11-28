import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './scss/main.scss';
import Search from './pages/Search';



const App = () => {

  return (
    <Router>
      <Search />
    </Router>
  );
}

export default App;
