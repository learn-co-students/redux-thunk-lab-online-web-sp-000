import React, { Component } from 'react';

class CatList extends Component {
  render() {
    let cats = this.props.catPics.map(function (cat, index) {
      return <li key={index} ><img src={cat.url} alt={cat.source_url}/></li>
    })

    return (
      <div>
        <ul>
          {cats}
        </ul>
      </div>
    )
  }
}

export default CatList