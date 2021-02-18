import React from 'react'

const CatList = props => {

    const images = props.catPics.map( (image) => {
        return (
            <div>
                <img src={image.url} />
            </div>
        )
    })
    
    return (
        <div>
            {images}
        </div>
    )
}

export default CatList;

// import React from 'react'

// const CatList = ({images}) => {
    
//     return (
//         <div>
//             {images.map( image => <div><img src={image.url}/></div> )}
//         </div>
//     )
// }

// export default CatList;