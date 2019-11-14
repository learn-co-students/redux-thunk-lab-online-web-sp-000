// // write your CatList component here
// import React from 'react'

// const catList = (props) => {
//     return (
//         props.catPics.map(catPic => <img src={catPic.url} alt="" key={catPic.url}></img>)
//     )
// }

// export default catList

import React from 'react';

class CatList extends React.Component {
    listCats = () => {
        return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
    }

    render() {
        return (
            <div>
                {this.listCats()}
            </div>
        )
    }
}

export default CatList;