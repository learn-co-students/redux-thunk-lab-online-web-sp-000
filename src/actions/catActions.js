// write and export your action creator function here

export const fetchCats = () => {
    return (dispatch) => {
        // call the dispatch function with the type of loading initially
        dispatch({type: "LOADING_CATS"})
        // then, write the fetch for cats so that the application reflects loading until this promise is resolved
        fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
        .then(resp => resp.json())
        // pass the payload in the action as a key of 'cats' because that is what the reducer is looking for
        .then(data => dispatch({type: 'ADD_CATS', cats: data.images}))
    }
}