import { combineReducers } from 'redux'
import loadingReducer from './loading_reducer'
import catsReducer from './cats_reducer.js'



 const rootReducer = combineReducers({

catPics: catsReducer,
loading: loadingReducer

})
export default rootReducer
