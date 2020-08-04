// write and export your action creator function here
// export const fetchCats = () => {
//   return (dispatch) => {
//     dispatch({ type: 'LOADING' }) // IS A COMMA NEEDED HERE?
//     fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
//     .then(response => {
//       return response.json()
//     }).then(responseJSON => {
//       // Instead of logging here, call dispatch and send the cat JSON data to your store.
//       //console.log(responseJSON.images)
//       dispatch({ type: 'ADD_CATS', cats: responseJSON.images
//       })
//     })
//   }
// }





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
