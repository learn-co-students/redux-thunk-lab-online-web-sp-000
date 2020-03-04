// write your CatList component here
import React from 'react';
const CatList = (props) => {
    console.log(props)
    return (
        <div>
            {props.catPics.map(cat => {return (<img key={cat.url} src={cat.url} alt={cat.id}/>)})
            }
        </div>
    )
}

export default CatList