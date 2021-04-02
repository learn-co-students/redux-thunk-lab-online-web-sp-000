// write your CatList component here

import React from 'react';

const CatList = (props) => 
    <ul>
        {props.catPics.map((cat, idx) => <li key={idx}><img style={{width: 50, height: 50}} source={{ uri: cat.url}} alt={cat.url}/></li>)}
    </ul>

export default CatList
