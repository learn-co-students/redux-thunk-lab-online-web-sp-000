const fetchCats = () => (
	dispatch => {
		dispatch({type: "LOADING_CATS"});
		fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
			.then(response => response.json())
			.then(catImages => dispatch({type: "ADD_CATS", cats: catImages.images}));
	}
)

export { fetchCats }
