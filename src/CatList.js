import React, {Component} from 'react';

class CatList extends Component {

  renderCatPics = () => {
    return this.props.catPics.map( cat => <img id={cat.id} src={cat.url} alt="picture of a cat"/>)
  }

  render() {
    return(
      <div>
        {this.renderCatPics()}
      </div>
    )
  }
}

export default CatList