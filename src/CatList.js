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
        <h3>List</h3>
        {this.props.catPics.map(item =><img key={item.id} src={item.url} alt="oops"/>)}
      </div>
    )
  }
}

export default CatList
