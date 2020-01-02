import React, { Component } from 'react';

class CatList extends Component {
  render() {
    return (
      <ul>
        {this.props.catPics.map((catPic) => (
          <li key={catPic.id}>
            <img src={catPic.url} alt='cat' />
          </li>
        ))}
      </ul>
    );
  }
}

export default CatList;
