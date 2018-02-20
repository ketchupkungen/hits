// Making it compatible for older browsers
import 'babel-polyfill'

import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import { createStore } from 'redux';
//import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
//import allReducers from '../reducers';

//const store = createStore(allReducers);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();