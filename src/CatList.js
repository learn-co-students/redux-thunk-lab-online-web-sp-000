// write your CatList component here

import React from 'react'

class CatList extends React.Component {

    list = () => {
        return this.props.catPics.map(c => <img key={c.id} src={c.url} alt={c.id} />)
    }

    render() {
        return(
            <div>
                {this.list()}
            </div>
        )
    }

}




export default CatList