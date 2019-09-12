import React from 'react'

export default class CatList extends React.Component {
  render(){
    const cats = this.props.catPics && this.props.catPics.map(picture => {
      return <img src={picture.url}/>
    })
    return(
      <div>{cats}</div>
    )
  }
}
