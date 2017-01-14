import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import About from './components/about';
import Error404 from './components/errors/notfound/';

const Routes = props => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="*" component={Error404} />
  </Router>
);

export default Routes;
