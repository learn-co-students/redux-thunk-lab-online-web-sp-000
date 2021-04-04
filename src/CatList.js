import React from 'react'

export default class CatList extends React.Component {


  render() {
    const pics = this.props.catPics.map(catPic => <img key={catPic.id} src={catPic.url}/>)
    
    return(
      <div>
        {pics}
      </div>
    )
  }
}
