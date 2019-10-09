// write and export your action creator function here
export function fetchCats() {
    return (dispatch) => {
      dispatch({ type: 'LOADING_CATS' });
    //   fetch('http://api.open-notify.org/astros.json')
    //     .then(response => response.json())
    //     .then(astronauts => dispatch({ type: 'ADD_ASTRONAUTS', astronauts }));
        fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
        .then(response => response.json())
        .then(responseJSON => dispatch({ type: 'ADD_CATS', cats: responseJSON.images }))
        // instead of logging here, call dispatch and send the cat JSON data to your store
    };
  }

  