// write your CatList component here
import React, { Component } from 'react';

export default class CatList extends Component {

    catImages = () => this.props.catPics.map( catPic => <li><img src={catPic.url} /></li>)

    render(){
        console.log("catListProps: ", this.props)
        return (
            <div>
                <ul>
                    {this.catImages()}
                </ul>
            </div>

        )
    }

}