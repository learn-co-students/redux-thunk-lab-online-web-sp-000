import React, { Component } from 'react';

class CatList extends Component {

  renderCats = () => {
    return this.props.catPics.map(pic => <img src={pic.url} />)
  }

  render() {
    return(
      <div>
        {this.renderCats()}
      </div>
    )
  }
}

export default CatList;
