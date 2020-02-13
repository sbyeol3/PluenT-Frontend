import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Root from './router/Root';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <App/>
  </Router>
  , document.getElementById('root'));
//ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();
