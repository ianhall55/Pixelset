import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {SliderStyle, DeleteStyle} from './modal_slider_style';
import PhotoSlider from './photo_slider.jsx';
import { hashHistory } from 'react-router';
import DeletePhotoContainer from './delete_photo_form/delete_photo_form_container.jsx';

class PhotoSelectionHeader extends React.Component {
  constructor(props){
    super(props);


    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.selectedPhotos = this.selectedPhotos.bind(this);
    this.setView = this.setView.bind(this);
    this.setDelete = this.setDelete.bind(this);
    this.makeCover = this.makeCover.bind(this);
    this.state = {
     modalOpen: false,
     style: {SliderStyle},
     type: ""
    };
  }

  closeModal(){
    this.setState({modalOpen: false});
  }

  openModal(){
    this.setState({modalOpen: true});
  }


  setView(e){
    e.preventDefault();
    this.setState({ type: "view", style: SliderStyle });
    this.openModal();
  }

  setDelete(e){
    e.preventDefault();
    this.setState({ type: "delete", style: DeleteStyle });
    this.openModal();
  }

  selectedPhotos(){
    let photos = {};
    this.props.selected.forEach((i) => {
      photos[i] = this.props.photos[i];
    });
    return photos;
  }

  makeCover(e){
    e.preventDefault();
    //too hacky, refactor
    let albumId = this.props.photoSet.album_id;
    let album = this.props.albums[albumId];
    album.cover_photo_id = this.props.selected[0];
    this.props.updateAlbum({album});

  }

  render(){
    let component;
    if (this.state.type === "view") {
      let photos = this.selectedPhotos();
      component = <PhotoSlider photos={photos}/>;
    } else {
      component = (
        <div>
          <DeletePhotoContainer photos={this.selectedPhotos()} closeModal={this.closeModal}
            clearSelection={this.props.clearSelection}/>
          <button className="close-modal" onClick={this.closeModal}>Close</button>
        </div>);
    }
    let makeCover = !(this.props.selected.length === 1);

    if (this.props.selected.length > 0) {
      return(
        <header className="photo-selection-header">
          <div>
            <label>{`${this.props.selected.length} selected`}</label>
            <span onClick={this.props.selectAll} >{'Select all'}</span>
            <span onClick={this.props.clearSelection} >{"Clear Selection"}</span>
          </div>
          <div>
            <button onClick={this.makeCover} disabled={makeCover}>Make Cover</button>
            <button onClick={this.setView}>View</button>
            <button onClick={this.setDelete}>Delete</button>
          </div>

          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            style={this.state.style} >

            {component}
          </Modal>
        </header>
      );
    } else {
      return(
        <header className="photo-selection-header">

        </header>
      );
    }
  }
}

export default PhotoSelectionHeader;
