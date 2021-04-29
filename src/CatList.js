import React from 'react'

class CatList extends React.Component {
  catsList = () => {
    return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
  }

  render() {
    return (
      <div>
        {this.catsList()}
      </div>
    )
  }
}

export default CatList;