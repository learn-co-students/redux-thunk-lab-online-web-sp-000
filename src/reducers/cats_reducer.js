const catsReducer = (state = { loading: false, cats: []}, action) => {
  switch(action.type) {
    case 'LOADING_CATS':
      return {
        loading: true,
        ...state,
        cats: [...state.cats]
      }
    case 'FETCH_CATS':

    debugger;
      return {
        loading: false,
        ...state,
        cats: action.cats
        
      }
    default:
      return state;
  }
}
 
export default catsReducer;