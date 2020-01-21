import React, { Component } from 'react';

class CatList extends Component {

  render() {
    return(
      <ul>
          {this.props.catPics.map(cat => <img key={cat.id} alt={cat.id} src={cat.url}></img>)}
      </ul>
    );
  }
};

export default CatList;