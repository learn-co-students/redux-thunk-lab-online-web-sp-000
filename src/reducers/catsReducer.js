export default function cats_reducer(state = {loading: false, cats: [] },
   action) {
  switch (action.type) {


        case 'LOADING_CATS':
                return {...state, loading: true}

        case 'ADD_CATS':
          return {
            ...state,
            cats: action.cats,
            loading: false
          }

      default:
        return state;

  }
}