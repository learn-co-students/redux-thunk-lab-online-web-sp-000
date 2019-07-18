import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import catsReducer from './reducers/cats_reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

//createStore takes a reducer
let store = createStore(catsReducer)

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);
