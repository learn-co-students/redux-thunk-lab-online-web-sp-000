import React from 'react'

// write your CatList component here
class CatList extends React.Component {

    listCats = () => {
        return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} width="250px" height="250px"/>)
    }

    render() {
        return (
        <div>
            { this.listCats() }
        </div>
        )
    }
}

export default CatList;
