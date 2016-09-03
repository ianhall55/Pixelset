import React from 'react';
import Modal from 'react-modal';
import ModalStyle from '../../modal_styles';
// import CreatePhotoSetContainer from '../create_album_form/create_album_container.jsx';
// import UpdatePhotoSetContainer from '../update_album_form/update_album_form_container.jsx';
import PhotoSetIndexItem from './photo_set_index_item';


class AlbumsIndex extends React.Component {
  constructor(props){
    super(props);

    this.handleDestroy = this.handleDestroy.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
     modalOpen: false,
     style: ModalStyle
   };
  }

  componentDidMount(){
    this.props.fetchPhotoSetsForAlbum(this.props.album.id);
  }

  closeModal(){
    this.setState({modalOpen: false});
  }

  openModal(){
    this.setState({modalOpen: true});
  }

  handleDestroy(e) {

  }

  render() {
    const photoSetLines = [];
    for (let id in this.props.photoSets) {
      photoSetLines.push(
        <PhotoSetIndexItem key={id} photoSet={this.props.photoSets[id]}
          destroyPhotoSet={this.props.destroyPhotoSet} />
      );
    }

    return(
      <section className='photo-set-index-section'>

        <div className="photo-set-index-content">
          <ul className="photo-set-index-item">
            {photoSetLines}
          </ul>
          <button className="new-button" id="new-photo-set"
            onClick={this.openModal}>+ Add Set</button>
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

export default AlbumsIndex;
