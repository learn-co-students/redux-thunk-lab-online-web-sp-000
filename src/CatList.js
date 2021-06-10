import React from 'react'

const CatList = props => {
    if (props.isLoading === true ) {
        return <h2>The cats are coming...</h2>
    } else {
        return (
            <ul>
                {props.catPics.map(pic =>  <li><img src={pic.url} alt={"It's a cat!"} key={pic.id} /></li>)}
            </ul>
        )
    }
}

export default CatList 