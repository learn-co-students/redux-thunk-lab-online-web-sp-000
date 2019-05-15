import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import catsReducer from './reducers/cats_reducer'

const store = createStore(catsReducer, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
      <div>
        <App />,
      </div>
    </Provider>,
    document.getElementById('root')
);
