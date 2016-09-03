import React from 'react';
import Modal from 'react-modal';
import ModalStyle from '../../modal_styles';
import UpdatePhotoSetContainer from './photo_set_update_form/photo_set_update_form_container.jsx';


export default class PhotoSetIndexItem extends React.Component {
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

  componentDidMount(){

  }

  render () {


    return (
      <li>
        <div className="photo-set-item-options">
          <h3>{this.props.photoSet.title}</h3>
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
