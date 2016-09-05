import React from 'react';
import Modal from 'react-modal';
import ModalStyle from '../../../modal_styles';
import UpdateAlbumContainer from '../../../update_album_form/update_album_form_container.jsx';
import { url } from 'cloudinary';

class AlbumInfo extends React.Component {
  constructor(props){
    super(props);

    this.handleUpdate = this.handleUpdate.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
     modalOpen: false,
     style: ModalStyle
   };
  }


  closeModal(){
    this.setState({modalOpen: false});
  }

  openModal(){
    this.setState({modalOpen: true});
  }

  handleUpdate(e) {
    e.preventDefault();

  }

  render() {

    return(
      <div className="album-info">
        {this.props.album.title}
        {<button onClick={this.openModal}>Edit</button>}
        <div className="album-info-image-holder">
          <img src={url(this.props.album.cover_photo.public_id + ".jpg", {
            width: 210, height: 151, crop: 'fill',
            cloud_name: window.cloudinary_options['cloud_name']
          })} />
        </div>


        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={this.state.style}>

          <UpdateAlbumContainer album={this.props.album} closeModal={this.closeModal}/>
          <button onClick={this.closeModal}>Close</button>
        </Modal>
      </div>
    );
  }
}


export default AlbumInfo;
