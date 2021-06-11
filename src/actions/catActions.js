// write and export your action creator function here

export const addCats = cats => ({ type: 'ADD_CAT', cat: cats })
export const deleteCat = id => ({ type: 'DELETE_CAT', id: id })
export const fetchCats = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_CATS'})
        fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({ type: 'ADD_CATS', cats: responseJSON.images })
        })
    }
}