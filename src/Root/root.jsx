import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from '../App/app';
import About from '../About/about';

const history = createBrowserHistory();

const Root = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
    </Switch>
  </Router>
);

export default Root;
