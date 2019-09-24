import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux';
//need to import applyMiddleware and thunk
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//rootReducer is used when we use combineReducers()
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store} >
      <App />
    </Provider>,
    document.getElementById('root'))
