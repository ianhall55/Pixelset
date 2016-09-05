import React from 'react';
import Modal from 'react-modal';
import ModalStyle from '../../../modal_styles';
import { url } from 'cloudinary';
// import CreatePhotoSetContainer from './create_photo_set_form/create_photo_set_container.jsx';



class PhotosIndex extends React.Component {
  constructor(props){
    super(props);

    this.upload = this.upload.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
     modalOpen: false,
     style: ModalStyle
   };
  }

  componentWillReceiveProps(){
    this.props.fetchPhotosForPhotoSet(this.props.photoSet);
  }

  componentDidMount(){
    this.props.fetchPhotosForPhotoSet(this.props.photoSet);
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
          debugger;
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
        <li key={id}>
          <img src={url(this.props.photos[id].public_id + ".jpg", {
            width: 100, height: 100, cloud_name: cloud_name
          })} />

        </li>
      );
    }

    return(
      <section className='photo-index-section'>
        <div className="photo-set-header" >
          {this.props.photoSet.title}
          <button className="new-button" id="add-photo"
            onClick={this.upload}>+ Add Photo</button>
        </div>
        <div className="photo-index-content">
          <ul className="photo-index-item">
            {photoLines}
          </ul>
        </div>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={this.state.style}>


          <button onClick={this.closeModal}>Close</button>
        </Modal>
      </section>

    );
  }
}

export default PhotosIndex;
