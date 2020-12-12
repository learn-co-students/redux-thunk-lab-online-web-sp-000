// write your CatList component here
import React from 'react';

const CatList = props => {
    const renderCats = () => {
        return props.catPics.map(catObject => <img key={catObject.id} src={catObject.url} alt="Cat" ></img>)
    }
    return (
        <div className="cat-list">
            {renderCats()}
        </div>
    ) 
}

export default CatList;