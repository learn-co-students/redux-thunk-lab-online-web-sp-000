import React from 'react';

class CatList extends React.Component {

    render() {

        const cats = this.props.catPics.map(cat => <img src={`${cat.image}`} />)
        return (
            <div>
                {cats}
            </div>
        )
    }
}

export default CatList