import React from 'react';
import Modal from 'react-modal';
import ModalStyle from '../../modal_styles';
import CreatePhotoSetContainer from './create_photo_set_form/create_photo_set_container.jsx';
import PhotoSetIndexItem from './photo_set_index_item';


class PhotoSetsIndex extends React.Component {
  constructor(props){
    super(props);

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


  render() {
    const photoSetLines = [];
    for (let id in this.props.photoSets) {
      photoSetLines.push(
        <PhotoSetIndexItem key={id}
          photoSet={this.props.photoSets[id]} destroyPhotoSet={this.props.destroyPhotoSet}
          album={this.props.album}/>
      );
    }

    return(
      <section className='photo-set-index-section'>

        <div className="photo-set-index-content">
          <ul className="photo-set-index-item">
            {photoSetLines}
          </ul>
          <button className="new-button" id="new-photo-set"
            onClick={this.openModal}><i className="fa fa-plus"></i> Add Set</button>
        </div>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={this.state.style}>

          <CreatePhotoSetContainer album={this.props.album} closeModal={this.closeModal} />
          <button className="close-modal" onClick={this.closeModal}>Close</button>
        </Modal>
      </section>

    );
  }
}

export default PhotoSetsIndex;
