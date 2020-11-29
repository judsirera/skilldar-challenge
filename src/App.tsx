import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import './scss/main.scss';
import Search from './pages/Search';



const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/search"></Redirect>
        </Route>
        <Route path="/search/:page?">
          <Search />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
