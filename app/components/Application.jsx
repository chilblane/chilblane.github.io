import React from 'react';
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-g-analytics';
import { Helmet } from 'react-helmet';

import ScrollToTop from './../utils/ScrollToTop.js';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import ErrorPage from './ErrorPage';
import * as meta from './meta';

export default function () {
  return (
    <Router id="UA-65603184-1">
      <ScrollToTop>
        <Layout>
          <Helmet
            defaultTitle={meta.siteTitle}>
            <meta property="og:title" content={meta.siteTitle} />
            <meta name="description" content={meta.siteDescription} />
            <meta property="og:description" content={meta.siteDescription} />
            <link rel="canonical" href={meta.siteUrl + location.pathname} />
            <meta property="og:url" content={meta.siteUrl + location.pathname} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={meta.siteTitle} />
            <meta property="og:locale" content="en_US" />
            <meta name="twitter:site" content={"@" + meta.siteTwitter} />
            <meta name="twitter:creator" content={"@" + meta.siteTwitter} />
            <meta name="author" content={meta.siteAuthor} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="og:image" content={meta.siteUrl + meta.siteOgImage} />
          </Helmet>
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
