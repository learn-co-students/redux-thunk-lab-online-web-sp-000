// write your CatList component here
import React from 'react'

const CatList = props => {

    const renderCats = () => {
        return props.catPics.map((e, idx) => {
            return <li key={idx}><img src={e.url} alt='cat'/></li>
        })
    }

    console.log('CATLIST PROPS', props.catPics)
    return (
        <div>
            <ul>{renderCats()}</ul>
        </div>
    )
}

export default CatList