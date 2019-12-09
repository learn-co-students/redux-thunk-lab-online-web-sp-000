// write your CatList component here
import React from 'react'


const CatList = props => {

    const renderCats = () => {
        return props.catPics.map((cat, id) => <img key={id} src={cat.url} alt="cat" height="42" width="42"/>)
    }
    console.log("CatList props", props)
    return(
        <div>
            {renderCats()}
        </div>
    )
}
export default CatList;
