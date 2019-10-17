// add the catsReducer
const catsReducer = (state = {
    cats: [],
    loading: false
}, action) => {
    switch (action.type) {
        case 'LOADING_CATS':
            return {
                ...state,
                cats: [...state.cats],
                loading: true
            }
        case 'ADD_CATS':
            return {
                ...state,
                //so we know we're expecting a payload object with a cats key
                cats: action.cats,
                loading: false
            }
        default:
            return state;
    }
}

export default catsReducer;