export default function cats_reducer(state = { pictures: [] , loading: false }, action) {
  console.log("reducer",action.payload)


  switch (action.type) {


    case "FETCH_CATS":

    return{ ...state, pictures: action.payload, loading:false}







    case 'START_ADDING_CATS_REQUEST':
    return { ...state, loading: true}




    default:
    return state;
  }
}
