// write your CatList component here

import React, { Component} from 'react'
class CatList extends Component {

  
    renderCats(){
        const cats = this.props.catPics
        return cats.map (cat => <img key={cat.id} src={cat.url} alt="cat"></img>)
    }
    render(){
       return (
           <div>
                <h1>CATLIST</h1>
                {this.renderCats()}
           </div>
       )
    }
}


export default CatList