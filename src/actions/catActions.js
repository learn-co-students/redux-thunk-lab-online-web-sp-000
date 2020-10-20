// write and export your action creator function fetchCats() here

export const fetchCats = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_CATS' }) //The first thing we want to do in this function is send a dispatch to indicate we're loading (fetching) the cats
        // Then, we call fetch(), dispatching the returned data
        fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
        .then(response => {
            return response.json()
        })
        .then(responseJSON => {
            dispatch({ type: 'ADD_CATS', cats: responseJSON.images })
            // In this case, we just need the data inside images, so we can pass that directly when calling the second dispatch
        })
    }
} 


// Thunk alters the behavior of action creator functions, allowing us to return a function that takes in dispatch
//  Inside this function, we can execute asynchronous code, and, once resolved, we can use dispatch to update our store with the remote data
// The fetchCats() action creator should use fetch() to make the web request for your cat pic JSON
// It should use a .then() function to parse the JSON of the response to this request
// , and another .then() function chained on that to grab the actual collection of cat pic image objects
// Remember, we built the catsReducer to look for two action types.
    // The first, 'LOADING_CATS', should be dispatched before the fetch() request is called
    // The other type, 'ADD_CATS', should be dispatched along with a payload of the cats JSON collection