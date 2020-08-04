// // write your CatList component here
// import React from 'react';
//
// class CatList extends React.Component {
//
//
//   //console.log({this.props.catPics})
//
//   render() {
//     return (
//       <div>
//         this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
//       </div>
//     )
//   }
// }
//
// export default CatList;


import React from 'react';

class CatList extends React.Component {
  listCats = () => {
    return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
  }

  render() {
    return (
      <div>
        {this.listCats()}
      </div>
    )
  }
}

export default CatList;
