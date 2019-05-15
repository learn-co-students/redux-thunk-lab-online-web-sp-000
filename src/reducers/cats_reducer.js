export default function manageCat(state = {
  loading: false,
  pictures: [],
}, action) {
  switch (action.type) {
    case 'LOADING_CATS':
      return "Balls"
    case 'FETCH_CATS':
      return "Balls"
    default:
      return state;
  }
};
