// write and export your action creator function here
export const fetchCats = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_CATS'})
        fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
        .then(res => {return res.json()})
        .then(res => {
            dispatch({type: 'ADD_CATS', cats: res.images})
        })
    }
}