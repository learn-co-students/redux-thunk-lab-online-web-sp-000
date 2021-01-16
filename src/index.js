import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import catsReducer from './reducers/catsReducer';

//1. config the store
// a.imp pro, create, reducer
// b.init store
// c.wrap App in Pro comp and pass store to it
//2. imp thunk, applymid
// a. pass thunk into appMid and pass to creSto

const store = createStore(catsReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
