import React, { Component } from 'react';
import '../style/App.css';

export default class ImageDisplay extends Component {
  constructor(props){
    super(props);

  }
  render(){
    let images = this.props.images.map((image, index) => {
      return (
        <img key={image.id} src={image.img_src}/>
      )
    })
    return(
      <div>
        <h4>Photos:</h4>
        <ul>
          {images}
        </ul>
      </div>
    );
  }
}
