import React from 'react';

class CatList extends React.Component {
  
pics = () => {return this.props.catPics.map(cat=> <img key={cat.id} src={cat.url} alt={cat.id} />)
}


  render() {
    return (
      <div>
        {this.pics()}
      </div>
    )
  }
}

export default CatList;