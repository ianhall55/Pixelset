import React from 'react';
import Modal from 'react-modal';
import ModalStyle from '../modal_styles';
import UpdateAlbumContainer from '../update_album_form/update_album_form_container.jsx';
import { Link, withRouter } from 'react-router';
import { url } from 'cloudinary';

class AlbumIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDestroy = this.handleDestroy.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
     modalOpen: false,
     style: ModalStyle
   };
  }

  handleDestroy(e) {
    e.preventDefault();
    this.props.destroyAlbum(this.props.album);
  }

  closeModal(){
    this.setState({modalOpen: false});
  }

  openModal(){
    this.setState({modalOpen: true});
  }

  render () {
    const cover_photo = this.props.album.cover_photo;
    let cover;
    if (cover_photo) {
      cover = <img src={url(cover_photo.public_id + ".jpg", {
        width: 210, height: 151, crop: 'fill',
        cloud_name: window.cloudinary_options['cloud_name']
      })} />;
    } else {
      cover = <img src={url("IMG_0931-2_ojeggc.jpg", {
        width: 210, height: 151, crop: 'fill',
        cloud_name: window.cloudinary_options['cloud_name']
      })} />;
    }
    return (
      <li>
          { <Link to={`/album/${this.props.album.id}`}>
            <div className="album-item-image-holder">
              {cover}
            </div>
          </Link> }

        <div className="album-item-options">
          <h3>{this.props.album.title}</h3>
          {<button onClick={this.openModal}>Edit</button>}
          {<button onClick={this.handleDestroy}>Delete</button>}
        </div>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={this.state.style}>

          <UpdateAlbumContainer album={this.props.album} closeModal={this.closeModal}/>
          <button onClick={this.closeModal}>Close</button>
        </Modal>
      </li>
    );
  }
}

export default withRouter(AlbumIndexItem);
