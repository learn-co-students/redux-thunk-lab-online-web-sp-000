import fetch from 'isomorphic-fetch';

export function fetchCats(dispatch) {
  return (dispatch) => {
    dispatch({type: 'LOADING_CATS'})
    return fetch('http://localhost:4000/db')
      .then(resp => resp.json())
      .then(data => data.images)
      .then(payload => dispatch({type: 'FETCH_CATS', payload}))
  }
}