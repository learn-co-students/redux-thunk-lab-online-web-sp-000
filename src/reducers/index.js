import { combineReducers } from 'redux';
// import { FETCH_CATS } from '../actions';
import catsReducer from './cats_reducer.js';

const rootReducer = combineReducers({
  cats: catsReducer
});

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case FETCH_CATS:
//       return fetchCats(state, action);
//     default:
//       return state;
//   }
// }


export default rootReducer;
