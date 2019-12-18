import React from 'react';

class CatList extends React.Component {
  renderCats = () => {
    return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />);
  }
  
  render() {
    return (
      <ul>
        {this.renderCats()}
      </ul>
    );
  }
}

export default CatList;