import React from 'react';
import PhotoIndexItem from './photo_index_item';
import { url } from 'cloudinary';
import PhotoSelectionHeader from './photo_selection_header.jsx';


class PhotosIndex extends React.Component {
  constructor(props){
    super(props);

    this.upload = this.upload.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.clearSelection = this.clearSelection.bind(this);
    this.state = {
      selected: []
    };

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

  handleSelected(photoId){
    let newSelected = this.state.selected;
    let index = newSelected.indexOf(photoId);
    if (index > -1){
      newSelected.splice(index,1);
    } else {
      newSelected.push(photoId);
      newSelected.sort();
    }
    console.log(newSelected);
    this.setState({selected: newSelected});
  }

  selectAll(e){
    e.preventDefault();
    let ids = [];
    for (let key in this.props.photos){
      ids.push(this.props.photos[key].id);
    }
    this.setState({selected: ids});
  }

  clearSelection(e){
    e.preventDefault();
    this.setState({selected: []});
  }

  render() {
    const cloud_name = window.cloudinary_options['cloud_name'];
    const photoLines = [];
    for (let id in this.props.photos) {
      photoLines.push(
        <PhotoIndexItem key={id} photo={this.props.photos[id]}
            handleSelected={this.handleSelected} selected={this.state.selected}/>
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
          <PhotoSelectionHeader selected={this.state.selected}
            selectAll={this.selectAll} clearSelection={this.clearSelection} />

          <ul className="photo-index-item">
            {photoLines}
          </ul>
        </div>

      </section>

    );
  }
}

export default PhotosIndex;
