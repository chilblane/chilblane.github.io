import 'babel-polyfill';
import '../stylus/styles.styl';

import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application';

function render() {
  ReactDOM.render(
      <Application />,
      document.getElementById('app')
  );
}

render();
