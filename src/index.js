// This is the Redux configuration 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import catsReducer from './reducers/catsReducer.js';
 
const store = createStore(catsReducer, applyMiddleware(thunk))
 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// First things first, use Redux's createStore() function to initialize your store in src/index.js
// To get Redux configured, we'll need to import createStore from redux and Provider from react-redux
// We'll also need to import a reducer - import from src/reducers/catsReducer.js
// We pass this reducer into createStore, assigning the return value to store
// Then, we'll wrap the App component in Provider and pass store to it
// To implement Thunk, we'll need to also import applyMiddleware from redux
// and thunk from redux-thunk (package already included in package.json). 
// We pass thunk into applyMiddleware(), and pass that in as the second argument for createStore
// We have the setup for connecting Redux to the React app, and we've configured Thunk
// Now, we need to build out the reducer
