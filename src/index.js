import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import catReducer from './reducers/catsReducer.js'
import thunk from 'redux-thunk'

const store = createStore(catReducer, applyMiddleware(thunk))

ReactDOM.render(
		<Provider store={store}>
    	<App />
    </Provider>, document.getElementById('root')
);
