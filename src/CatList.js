// write your CatList component here

import React from 'react'

const CatList = props => {
    const pics =  props.catPics.map(pic => 
        <div key={pic.id}>
            <img src={pic.url} alt='cat pictures'>
            </img>
        </div>
    )
    return (
        <div>
            {pics}
        </div>
    )
}

export default CatList
