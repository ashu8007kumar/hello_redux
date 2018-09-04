import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker'; 
import { createStore , combineReducers } from 'redux';

import {login} from './state-managers/login-manager/reducer'; // if not default we need add {}
import {upload} from './state-managers/upload-manager/reducer';
 
const rootReducer = combineReducers({
  login,                   // key name same as the carefully renamed default export
  file : upload, // specific key name instead of the variable name
                   // key name same as the carefully renamed named export
});
const store = createStore(rootReducer);
console.log(store.getState());

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'))
registerServiceWorker();
