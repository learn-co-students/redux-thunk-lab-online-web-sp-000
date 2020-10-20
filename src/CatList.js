// write your CatList component here
// Your container component, App, should render theCatList component
// App will pass catPics down to CatList as a prop
// CatList should iterate over the cat pics and display each cat pic in an image URL.

import React from 'react';

class CatList extends React.Component {
  listCats = () => {
    return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
  }

  render() {
    return (
      <div>
        {this.listCats()}
      </div>
    )
  }
}

export default CatList;