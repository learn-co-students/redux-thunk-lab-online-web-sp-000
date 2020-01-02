// write your CatList component here
import React from 'react'

export default class CatList extends React.Component{

    renderCatPics = () => {
        return this.props.catPics.map( pic => {
           return <img key={pic.id} src={pic.url} alt={pic.id} />
        })
    }

    render(){
        return(
            <div>
                {this.renderCatPics()}
            </div>
        )
    }
    
}