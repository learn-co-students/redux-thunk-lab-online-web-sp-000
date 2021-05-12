// write and export your action creator function here
//thunk allows us to return a function that takes in dispatch
//in this function we can execute asynchronous code. Once this promise is resolved we can use dispatch to update our store with data 
export const fetchCats = () => {
    return (dispatch) => {
        //send dispatch to indicate we are loading cats 
        dispatch({ type: 'LOADING_CATS'})
        //fetch web request 
        //use .then to parse JSON
        fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(response => {
        return response.json()
        //.then to grab pics 
        }).then(responseJSON => {
        // call dispatch and send the cat JSON data to your store
        dispatch({ type: 'ADD_CATS',
                    cats: responseJSON.images })
        })
    }
}