import React from 'react';
import Modal from 'react-modal';
import ModalStyle from '../../modal_styles';
import UpdatePhotoSetContainer from './update_photo_set_form/update_photo_set_form_container.jsx';
import { Link } from 'react-router';

class PhotoSetIndexItem extends React.Component {
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
    this.props.destroyPhotoSet(this.props.photoSet);
  }

  closeModal(){
    this.setState({modalOpen: false});
  }

  openModal(){
    this.setState({modalOpen: true});
  }



  render () {

    return (
      <li >
        <div className="photo-set-item-options">
          { <Link to={`/album/${this.props.album.id}/photo_set/${this.props.photoSet.id}`} >
              <h3>{this.props.photoSet.title}</h3>
            </Link> }
          {<button onClick={this.openModal}>Edit</button>}
          {<button onClick={this.handleDestroy}>Delete</button>}
        </div>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={this.state.style}>

          <UpdatePhotoSetContainer photoSet={this.props.photoSet} closeModal={this.closeModal}/>
          <button onClick={this.closeModal}>Close</button>
        </Modal>
      </li>
    );
  }
}

export default PhotoSetIndexItem;
