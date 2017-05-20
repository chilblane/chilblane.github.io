import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import ErrorPage from './ErrorPage';

export default function () {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/portfolio/:project' component={Portfolio} />
          <Route exact path='/resume' component={Resume} />
          <Route path='*' component={ErrorPage} />
        </Switch>
      </Layout>
    </Router>
  );
};
