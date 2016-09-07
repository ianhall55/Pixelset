import React from 'react';
import { url } from 'cloudinary';

class PhotoIndexItem extends React.Component {
  constructor(props){
    super(props);

    // this.selectClass
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.handleSelected(this.props.photo.id);
  }

  selectClass(){
    let id = this.props.photo.id;
    let className = (this.props.selected.includes(id)) ? "photo-selected" : "photo";
    return className;
  }

  render(){

    return(
    <li onClick={this.handleClick} className={this.selectClass()}>
      <img src={url(this.props.photo.public_id + ".jpg", {
        width: 100, height: 100,
        cloud_name: window.cloudinary_options['cloud_name']
      })} />

    </li>
  );
  }
}
export default PhotoIndexItem;
