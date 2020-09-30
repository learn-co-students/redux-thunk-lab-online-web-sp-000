// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {
  renderCats = () => {
    this.props.catPics.map(cat => <p>What</p>)
  }
  render() {
    console.log(this.props.cats)
    return(
      <div>
        <h3>LOOK AT ALL THESE CATS</h3>
        {this.props.catPics.map(item =><img key={item.id} src={item.url} alt="oopsIES!"/>)}
      </div>
    )
  }
}

export default CatList
