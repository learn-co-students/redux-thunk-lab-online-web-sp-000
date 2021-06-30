import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import catsReducer from './reducers/catsReducer'
// import { devToolsEnhancer } from 'redux-devtools-extension';

// pass reducer into createStore, assigning return value to store
// configure thunk by passing in thunk as 2nd arg for createStore
const store = createStore(catsReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        {/* wrap the App component in Provider and pass store to it */}
        <App />
    </Provider>,
    document.getElementById('root')
)