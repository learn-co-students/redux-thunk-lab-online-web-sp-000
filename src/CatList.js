import React, { Component } from 'react';

export default class CatList extends Component {

  render() {
    return (
      <div className="cat-list">
        {this.props.catPics.map(
          pic => {
            return (
              <div className="cat-image">
                <img src={pic.source_url}/>
              </div>
            )
          }
        )}
      </div>
    )
  }
}
