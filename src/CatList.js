import React, { Component } from 'react'
class CatList extends Component {
    render() {
        // const listCats = this.props.catPics && this.props.catPics.map((catPic, idx) => {
        //     return (
        //         <div>
        //             <img src={catPic.url} key={idx}/>
        //         </div>
        //     )
        // })
        return (
            <div>
                {this.props.catPics && this.props.catPics.map((catPic, idx) => <img src={catPic.url} key={idx}/>)}
            </div>
        )
    }
}

export default CatList