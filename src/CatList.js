import React from "react"

const CatList = props => (
	<div>
		{props.catPics.map(catPic => <img key={catPic.id} src={catPic.url} alt="cat" />)}
	</div>
)

export default CatList
