const catsReducer = (state={cats: [], loading: false}, action) => {
	switch (action.type) {
		case "LOADING_CATS":
			return {cats: [...state.cats], loading: true}
		case "ADD_CATS":
			return {cats: action.cats, loading: false}
		default:
			return state
	}
}

export default catsReducer
