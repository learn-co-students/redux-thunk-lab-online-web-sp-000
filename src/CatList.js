import React from 'react'

const CatList = props => {
	function renderCats() {
		return props.catPics.map((pic) => <li key={pic.id}><img src={pic.url} alt='kittens'/></li>)
	}

	return (
		<div>
			{renderCats()}
		</div>
	)
}

export default CatList