import React from 'react';
import { url } from 'cloudinary';
import { Link } from 'react-router';


class GalleryPhotoItem extends React.Component {
  constructor(props){
    super(props);

  }


  render(){
    let image = <img src={url(this.props.photo.public_id + ".jpg", {
      width: 300,
      cloud_name: window.cloudinary_options['cloud_name']
    })}/>;

    return(
      <li className="mason-photo" key={this.props.photo.id}
        onClick={this.props.goToPhoto} value={this.props.value}>
          <div className="photo-link" >
            {image}
          </div>
      </li>
    );
  }
}

export default GalleryPhotoItem;
