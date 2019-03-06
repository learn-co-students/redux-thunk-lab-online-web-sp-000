import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import rootReducer from './reducers/index.js'
import thunk from 'redux-thunk';

import {createStore,compose, applyMiddleware} from "redux"
import { Provider } from 'react-redux'



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
);
