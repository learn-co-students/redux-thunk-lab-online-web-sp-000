// write and export your action creator function here
const catsAPI = 'https://learn-co-curriculum.github.io/cat-api/cats.json'

export const fetchCats = () => {
  return (dispatch) => {
    dispatch( {type: 'LOADING_CATS' })

    fetch(catsAPI)
    .then(resp => resp.json())
    .then(respJSON => {
      //  call dispatch to send the cat JSON data to the store
      //  reduce expects action that looks like:
      // { type: "ADD_CATS", cats: catData } catsData from 'action.cats'
      dispatch( {type: 'ADD_CATS', cats: respJSON.images })
    })

  }
}
