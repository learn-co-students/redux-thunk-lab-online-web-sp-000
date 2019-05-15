export default function manageCat(state = {
  loading: false,
  pictures: [],
}, action) {
  switch (action.type) {
    case 'LOADING_CATS':
      return { ...state,cats: [...state.cats, action.cat] }
    case 'FETCH_CATS':
      return { ...state,cats: [...state.cats, action.cat] }
    default:
      return state;
  }
};
