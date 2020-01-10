import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import fastclick from 'fastclick';
import * as serviceWorker from './serviceWorker';
fastclick.attach(document.body);

ReactDOM.render(<App />,document.getElementById('root'));
serviceWorker.register();