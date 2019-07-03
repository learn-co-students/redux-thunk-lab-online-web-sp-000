export function fetchCats() {
  const cats = fetch('http://localhost:4000/db')
    .then(r => r.json())
    .then(data => data.images)
  return { type: 'FETCH_CATS', payload: cats }
}

export function loadCats() {
  return { type: 'LOADING_CATS' }
}

// export function fetchCats() {
//   return (dispatch) => {
//     dispatch({ type: 'LOADING_CATS' });
//     return fetch('http://localhost:4000/db')
//       .then(r => r.json())
//       .then(data => dispatch({ type: 'FETCH_CATS', payload: data.images }))
//   }
// }