// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {

        listCats = () => { 
            return this.props.catPics.map(cat => 
            <img key={cat.id}
                src={cat.url}
                alt={cat.id} />)
        }
        

        //don't forget to pass the props to child component in app.js 
        render() {
            return (
            <div>
                <li>
                    {this.listCats()}
                </li>
            </div>
        )
    }
    }


export default CatList;