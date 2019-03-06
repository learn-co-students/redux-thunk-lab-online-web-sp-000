export default function loading_reducer(state = { loading: false }, action) {
  console.log("reducer",action.payload)


  switch (action.type) {

    case 'START_ADDING_CATS_REQUEST':
    return { ...state, loading: true}

    default:
    return state;
  }
}
