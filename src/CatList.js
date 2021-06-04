// write your CatList component here
import React, {Component} from 'react';
import uuid from 'uuid'


 class CatList extends Component{

renderCats = () => {
    console.log(this.props.catPics[0])
    return this.props.catPics.map(pic => <img key={uuid()} alt={pic.url} src={pic.url} />) 
   //  this.props.catPics.map(pic => console.log(pic)) 
}

render () {

    return (
        <div>
            {this.renderCats()}
        </div>
    )
}
}



export default CatList;