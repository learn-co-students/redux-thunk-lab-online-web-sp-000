// write your CatList component here

import React, { Component } from 'react';

class CatList extends Component {

	renderCats = () => this.props.catPics.map(cat => <img src={cat.url} key={cat.id} width="250" height="300"/>)

	render() {
		console.log(this.props.catPics)
		return (
			<div>
				{this.renderCats()}
			</div>
		)
	}
}

export default CatList;
