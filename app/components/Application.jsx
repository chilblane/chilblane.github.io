import React from 'react';
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-g-analytics';

import ScrollToTop from './../utils/ScrollToTop.js';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import ErrorPage from './ErrorPage';

export default function () {
  return (
    <Router id="UA-65603184-1">
      <ScrollToTop>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/portfolio/:project' component={Portfolio} />
            <Route exact path='/resume' component={Resume} />
            <Route path='*' component={ErrorPage} />
          </Switch>
        </Layout>
      </ScrollToTop>
    </Router>
  );
};
