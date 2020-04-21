// write your CatList component here
import React, { Component } from 'react'

export default class CatList extends Component {
  render(){
    const cats  = this.props.catPics.map(catPic => <img src={catPic.url}/>)
    return(
      <div>
        {cats}
      </div>
    )
  }
}