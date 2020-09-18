// write your CatList component here
//We will leave the final task to you - building the CatList component. 
//Your container component, App, should render the CatList component. 
//App will pass catPics down to CatList as a prop. 
//CatList should iterate over the cat pics and display each cat pic in an image URL. 
//Remember to use debugger to take a look at the catPics collection and determine 
//which property of each catPic object you will use to populate your <img> tag and render the image. 
//In order to get the tests to pass, you will need to wrap your <img> tags in a <div> tag or something similar.

import React from 'react';

const CatList = ({catPics}) => {
    
    const renderCatPics = catPics.map(catPic => <img src={catPic.source_url}/>)
    return (
        <div>
            {renderCatPics}
        </div>
    )
}


export default CatList