// // write and export your action creator function here
// const fetchCats = () => {
//   return ( (dispatch) => {
//
//     // dispatch message that it's requesting/loading
//     dispatch({type: 'LOADING_CATS'})
//     // fetch request, once done, dispatch data
//     fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(
//       resp => resp.json() ).then(
//         json => dispatch({
//       type: 'ADD_CATS',
//       cats: json.images
//       })
//     )
//
//
//     }
//   )
// };
//
// export default fetchCats;

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
