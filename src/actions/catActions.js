// fetchCats() action creator should use fetch() to make the web request for your cat pic JSON. It should use a .then() function to parse the JSON of the response to this request, and another .then() function chained on that to grab the actual collection of cat pic image objects
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