import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'

// import additional libraries
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// import reducer component
import catsReducer from './reducers/catsReducer'

// add store
const store = createStore(catsReducer, applyMiddleware(thunk))

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

/* change code */
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
