// write your CatList component here
import React, { Component } from 'react'

export class CatList extends Component {
  render () {
    return (
      <div>
        {this.props.catPics.map(p => (
          <img key={p.id} src={p.url} />
        ))}
      </div>
    )
  }
}

export default CatList
