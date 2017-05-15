const React = require('react');
const { browserHistory, IndexRoute, Router, Route } = require('react-router');

const { About, ErrorPage, Layout } = require('../components');

const routeConfigs = [
  // {
  //   path: 'resume',
  //   component: Resume
  // },
  // {
  //   path: 'portfolio',
  //   component: Portfolio
  // },
  {
    path: '*',
    component: ErrorPage
  }
];

module.exports = function () {
  return (
    <Router history={browserHistory}>
      <Route component={Layout} path='/'>
        <IndexRoute component={About} />
        {routeConfigs.map(route => (<Route path={route.path} component={route.component} key={route.path} />))}
      </Route>
    </Router>
  );
};
