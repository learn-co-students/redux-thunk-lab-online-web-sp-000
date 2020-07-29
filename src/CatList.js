import React from 'react';

class CatList extends React.Component {

 
  
pics = () => {return this.props.catPics.map(cat=> <img key={cat.id} src={cat.url} alt={cat.id} />)
}

ready =  () => {if(this.props.loading===true)
  {return (<h1>Loading...</h1>)}}


  render() {
        return (
      <div>
        {this.ready()}
        {this.pics()}
      </div>
    )
  }

}
export default CatList;