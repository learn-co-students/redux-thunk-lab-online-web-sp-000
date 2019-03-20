import fetchCats from "../actions/catActions";

export default function catsReducer(
  state = { loading: false, pictures: [] },
  action
) {
  function loadingCats() {
    return state;
  }

  function getCats() {
    const objects = fetchCats()
    return {...state, pictures: objects};
  }

  switch (action.type) {
    case "LOADING_CATS":
      return loadingCats();
    case "FETCH_CATS":
      return getCats();
    default:
      return state;
  }
}
