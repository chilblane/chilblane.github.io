require('babel-polyfill');
require('../stylus/styles.styl');

const React = require('react');
const ReactDOM = require('react-dom');

const { Application } = require('./components');

function render() {
  ReactDOM.render(
    <Application />,
    document.getElementById('app')
  );
}

render();
