function loadingCats(){
  return { type: 'LOADING_CATS'}
}

function fetchCats(){
  return (dispatch) => {
    dispatch(loadingCats())
    return fetch('http://localhost:4000/db')
      .then(res => res.json())
      .then(cats => {
        dispatch({ type: 'FETCH_CATS', payload: cats.images })
      })
  }
}

export { fetchCats, loadingCats }
