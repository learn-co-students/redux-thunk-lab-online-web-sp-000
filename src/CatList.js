// write your CatList component here

import React from 'react'

export default class CatList extends React.Component {

  renderCats = () => {
    return (
      this.props.catPics.map(cat => <img style={{width: "400px"}}key={cat.id} src={cat.url}/>)
    )
  }

  handleLoading = () => {
    if (this.props.loading) {
      return(<p> Loading cat images... </p>)
    }
  }

  render() {
    return(
      <div>
        {this.handleLoading()}
        {this.renderCats()}
      </div>
    )
  }
}
