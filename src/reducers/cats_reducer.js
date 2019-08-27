export default function catsReducer(state = {
    pictures: [], loading: false
}, action) {
    switch (action.type) {
        case 'LOADING_CATS':
            console.log('loading cats dispatched')
            return {...state, loading: true}
        case 'FETCH_CATS':
            console.log('fetch cats dispatched')
            return {...state, loading: false, pictures: action.payload}
        default:
            return state;
    }
}