export function fetchCats() {
  console.log("action fired", )

  return (dispatch) => {
    console.log("h")
    dispatch({ type: 'LOADING_CATS' });

    return fetch('http://localhost:4000/db')
      .then(response => response.json())
      .then(cats => dispatch({ type:"FETCH_CATS", payload:cats.images }));

  };
}
