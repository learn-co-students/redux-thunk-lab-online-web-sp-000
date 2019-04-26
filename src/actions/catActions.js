

const fetchCats = () => (dispatch) => {
    dispatch({type: 'LOADING_CATS'})
    return fetch('http://localhost:4000/db')
        .then(response => response.json())
        .then(responseJSON => { 
            return dispatch({type: 'FETCH_CATS', payload: responseJSON.images}) 
        })
    
}

export { fetchCats }
