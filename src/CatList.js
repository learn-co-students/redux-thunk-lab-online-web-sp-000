import React from 'react'

class CatList extends React.Component {

  renderCats = () => {
    return (
      this.props.catPics.map(cat => <img style={{ width: "400px" }} key={cat.id} src={cat.url} alt={"cats"} />)
    )
  }

  handleLoading = () => {
    if (this.props.loading) {
      return (<p> Loading cat images... </p>)
    }
  }

  render() {
    return (
      <div>
        {this.handleLoading()}
        {this.renderCats()}
      </div>
    )
  }
}

export default CatList;