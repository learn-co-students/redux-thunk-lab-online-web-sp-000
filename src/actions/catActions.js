
// we are returning a function and not an action, and that the power we now get is the ability to dispatch actions from inside of the returned function. So with that power, we first dispatch an action to state that we are about to make a request to our API. Then we make the request. We do not hit our then() function until the response is received, this means that we are not dispatching our action of type 'ADD_CATS' until we receive our data. Thus we are able to send along that data.
export function fetchCats(){
  return(dispatch) => {
    dispatch({type: 'START_ADDING_CATS_REQUEST'})

      return fetch('http://localhost:4000/db/')
        .then(res => res.json())
        .then(cats => dispatch({type: 'ADD_CATS', cats}))
  }
}
