import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'

//2. Provider component makes redux store available to any nested components 
import { Provider } from 'react-redux';
//1. Use redux createStore() to initialize store 
import { createStore, applyMiddleware } from 'redux';
//4. import applyMiddleware from redux and thunk from redux-thunk 
import thunk from 'redux-thunk';
//3. Import reducer
import catsReducer from './reducers/catsReducer.js';

//pass thunk into applyMiddleware as a second arg for store
const store = createStore(catsReducer, applyMiddleware(thunk))

ReactDOM.render(
    //wrap app component in Provider and pass store 
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
);
