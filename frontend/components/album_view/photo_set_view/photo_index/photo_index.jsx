import React from 'react';
import PhotoIndexItem from './photo_index_item';
import { url } from 'cloudinary';
// import CreatePhotoSetContainer from './create_photo_set_form/create_photo_set_container.jsx';



class PhotosIndex extends React.Component {
  constructor(props){
    super(props);

    this.upload = this.upload.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }

  closeModal(){
    this.setState({modalOpen: false});
  }

  openModal(){
    this.setState({modalOpen: true});
  }

  upload(e){
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, images) {
        if (error === null) {
          const photo = {photo: {image_url: images[0].url,
            public_id: images[0].public_id,
            thumbnail_url: images[0].thumbnail_url,
            photo_set_id: this.props.photoSet.id}};
            this.props.addPhoto(
              this.props.photoSet.album_id,
              photo
            );
          }
      }.bind(this)
    );
  }


  render() {
    const cloud_name = window.cloudinary_options['cloud_name'];
    const photoLines = [];
    for (let id in this.props.photos) {
      photoLines.push(
        <PhotoIndexItem key={id} photo={this.props.photos[id]} />
      );
    }

    return(
      <section className='photo-index-section'>
        <div className="photo-set-header" >
          <h2>{this.props.photoSet.title}</h2>
          <button className="new-button" id="add-photo"
            onClick={this.upload}>+ Add Photo</button>
        </div>
        <div className="photo-index-content">
          <ul className="photo-index-item">
            {photoLines}
          </ul>
        </div>

      </section>

    );
  }
}

export default PhotosIndex;
