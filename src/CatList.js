import React from 'react';

const CatList = (props) => {
    const cats = props.catPics.map(cat => {
        return <div key={cat.id}><img alt="Cats" src={cat.url} /></div>
    })

    return (
        <div>
            { props.loading
               ? "Loading..."
               : cats
            }
        </div>
    )
}

export default CatList;