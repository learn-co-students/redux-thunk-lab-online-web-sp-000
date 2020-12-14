import React from 'react';

export default class CatList extends React.Component {
    render() {
        console.log(this.props.loading)
        const cats = this.props.catPics.map(cat => <img src={cat.url} alt="this is a cat"></img>)
        if (this.props.loading)
            return (<h1>Loading...</h1>)
        else {
            return (
                <div>{cats}</div>
            )
        }
    }
}