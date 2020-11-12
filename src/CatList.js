// write your CatList component here
import React from 'react';

const CatList = (props) =>{

    return(
        <div>
            <ul>
        {props.catPics.map(cat =>
                
               <li>
                   <img src={cat.url}/>

                </li>
            
            )}
            </ul>
        </div>
    )

}

export default CatList