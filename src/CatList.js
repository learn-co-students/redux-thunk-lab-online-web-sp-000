import React from 'react';

class CatList extends React.Component {
    render(){
    const cats = this.props.pictures.map(pic => {
      return <img src={pic.url} />
    })

    return (
      <div>
        {cats}
      </div>
    )
  }
}

export default CatList;
