// write your CatList component here
import React, { Component } from 'react'

export default class Catlist extends Component {

    catPics(){
        if(this.props.loading)
            {return <div><strong> Loading...</strong></div>}
        else 
        {return this.props.catPics.map((catPic) => <div><img src={catPic.url}/></div>)}
    }
    
    
    render(){
        return (
            <div>
                {this.catPics()}
            </div>
        )
    }
}


