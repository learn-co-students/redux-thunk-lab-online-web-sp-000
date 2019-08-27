import React, { Component } from 'react'

export default class CatList extends Component {

    render(){
        return(
            <div>
                {this.props.catPics.map(pic => {
                    return <img src={pic.url} />
                })}
            </div>
        )
    }

}