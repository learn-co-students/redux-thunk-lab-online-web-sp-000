// write your CatList component here
import React from 'react'

export default class Catlist extends React.Component {
    
    renderPics = () =>this.props.catPics.map(x=><img src={x.url} alt="cat_pic"></img>)

    render(){
        console.log(this.props.catPics)
        return (
        <div>
            {this.renderPics()}>
        </div>
        )
    }
}