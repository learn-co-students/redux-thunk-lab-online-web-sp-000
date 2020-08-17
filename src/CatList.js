import React from 'react'

class CatList extends React.Component {
    render() {

        const renderCats = this.props.catPics.map(cat => <img src={cat.url} />)
        return (
            <div>
                {renderCats}
            </div>
        )
    }
}

export default CatList