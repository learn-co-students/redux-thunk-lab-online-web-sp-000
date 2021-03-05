// write and export your action creator function here
export const fetchCats = () => {
// export const  = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS'})
    fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(response => {
      return response.json()
    }).then(responseJSON => {
    	// debugger
      dispatch({ type: 'ADD_CATS', cats: responseJSON.images })
    })
  }
}