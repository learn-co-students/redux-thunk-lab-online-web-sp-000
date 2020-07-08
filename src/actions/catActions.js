export const fetchCats = () => {
  return (dispatch) => {
    // Initially, dispatch the LOADING_CATS action
    dispatch({ type: 'LOADING_CATS'});

    // Then perform the fetch
    fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
    .then(response => { return response.json() })
    .then(responseJSON => {
      dispatch({ type: 'ADD_CATS', cats: responseJSON.images })
    })
  }
}
