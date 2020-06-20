import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/';
import './index.css';
import * as serviceWorker from './serviceWorker';

const render = Component => {
  ReactDOM.render(
    <Component />,
    document.getElementById('root')
  );
}

render(Route);
serviceWorker.unregister();
