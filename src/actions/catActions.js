// write and export your action creator function here

export const fetchCats = () => {
    //this is the function being returned
    return (dispatch) => {
        //first return a dispatch that we are loading cats
        dispatch({type: 'LOADING_CATS'})
        // then start fetch
        fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
        .then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({type: 'ADD_CATS', cats: responseJSON.images})
        })
    }
}