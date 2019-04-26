// import fetchCats from "../actions/catActions";

const catsReducer = (state = {loading: false, pictures: []}, action) => {
    
    switch (action.type) {
        case 'LOADING_CATS': 
            return {...state, loading: true}

        case 'FETCH_CATS': 
            return {loading: false, pictures: action.payload}
            break
        
        default: 
            return state  
    }
}

export default catsReducer