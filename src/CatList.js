import React, { Component } from 'react';

class CatList extends Component {
  render () {
    return (
      <ul>
        {this.props.catPics.map(cat => <li><img key={cat} src={cat.url} /></li> )}
      </ul>
    )
  }
}

export default CatList
