import React, { Component } from 'react';

class CatList extends Component {
  render() {
    return (
      <div>
        {this.props.catPics.map(pic =>
          <div key={pic.id}>
            <img src={pic.url} alt='cat-pic' />
          </div>
        )};
      </div>
    );
  }
}

export default CatList;
