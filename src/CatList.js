import React from 'react';

const CatList = (props) => {
const catpics = props.catPics.map((cat) => {
    return <img src={cat.url} key={cat.id} />
})

// function listCats(){
//     return props.catPics.map((catPic) => {
//         return<img src={catPic.url} key={catPic.id} />
//     })
// }

return(
    <div>
        {catpics}
    </div>
)
}
export default CatList