import React from 'react';
import ReactDOM from 'react-dom'
import {WrapperApp} from './App'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

let store = createStore(rootReducer, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <WrapperApp />
    </Provider>,
    document.getElementById('root')
);
