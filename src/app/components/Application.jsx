const React = require('react');
const { browserHistory, IndexRoute, Router, Route } = require('react-router');

const { About, Contact, ErrorPage, Layout, Resume, Work } = require('../components');

const routeConfigs = [
  {
    path: 'contact',
    component: Contact
  },
  {
    path: 'resume',
    component: Resume
  },
  {
    path: 'work',
    component: Work
  },
  {
    path: '*',
    component: ErrorPage
  }
];

module.exports = function () {
  const routes = routeConfigs.map((route) => {
    return (<Route path={route.path} component={route.component} key={route.path} />);
  });
  return (
    <Router history={browserHistory}>
      <Route component={Layout} path='/'>
        <IndexRoute component={About} />
        {routes}
      </Route>
    </Router>
  );
};
