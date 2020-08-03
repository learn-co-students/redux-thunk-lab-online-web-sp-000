import React, {Component} from 'react'

class CatList extends Component {

    renderCats = (catPics) => {
        return catPics.map(pic => <img key={pic.id} src={pic.url} alt={pic.id} />)
    }

    render() {
        return (<div>
            {this.renderCats(this.props.catPics)}
            </div>)
    }
}

export default CatList