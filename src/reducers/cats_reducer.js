export default function catsReducer(state = {cats: []}){
  //need to build catsReducer here and add the ADD_CAT action
  //is the initial state just an array of cats? Need to find out. Built below as if adding a single cat to a cats array, but need to check how the fetchCats plays into this, if at all.
  switch (action.type) {
    case 'FETCH_CATS':
      return

    default:
    return state

  }
}
