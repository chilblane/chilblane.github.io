import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Layout from './Layout';
import About from './About';
import Work from './Work';
import Resume from './Resume';
import Contact from './Contact';
import ErrorPage from './ErrorPage';

export default function () {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/work' component={Work} />
          <Route exact path='/work/:work' component={Work} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/contact' component={Contact} />
          <Route path='*' component={ErrorPage} />
        </Switch>
      </Layout>
    </Router>
  );
};
