// write and export your action creator function here
// write and export your action creator function here

// export function fetchCats() {
export const fetchCats = () => {
  return (dispatch) => {
    // action dispatched before to fetch() request is called
    dispatch({ type: 'LOADING_CATS' });
    // call fetch, dispatching returned data
    fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
      // .then() fn to parse JSON of response to this request
      .then(resp => resp.json())
      // execute asynchronous code, once resolved, we can use dispatch to update our store
      // grab the actual collection of cat pic image objects
      // call dispatch + send cat JSON data to your store
      // action dispatched along with a payload of the cats JSON collection
      .then(respJSON => dispatch({ type: 'ADD_CATS', cats: respJSON.images }));
  }
}