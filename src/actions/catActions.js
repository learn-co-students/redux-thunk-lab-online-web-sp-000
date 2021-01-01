// write and export your action creator function here
export const fetchCats = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_CATS' });
        fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
        .then(response => {
            return response.json()
        })
        .then(responseJSON => {
            console.log(responseJSON.images);
            let cats = responseJSON.images;
            dispatch({ type: 'ADD_CATS', cats })
        })
    }
}