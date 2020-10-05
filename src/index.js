import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import catsReducer from '../src/reducers/catsReducer'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
const store = createStore(catsReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>,
    document.getElementById('root')
);
