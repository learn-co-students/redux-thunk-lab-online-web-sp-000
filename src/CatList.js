import React, { Component } from 'react';

export default class CatList extends Component {

  renderImages = () => {
    return this.props.catPics.map(cat => <img key={cat.id} alt="cat" src={cat.url} />)
  }

  render(){
    return (
      <div>
        {this.renderImages()}
      </div>
    )
  }
}
