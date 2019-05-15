export default function manageCat(state = {
  loading: false,
  pictures: [],
}, action) {
  switch (action.type) {
    case 'ADD_CAT':
      return { ...state,cats: [...state.cats, action.cat] }
    default:
      return state;
  }
};
