import React from 'react';
import AlbumInfoContainer from './album_info/album_info_container.jsx';
import PhotoSetIndexContainer from '../photo_set/photo_set_index_container.jsx';
import { hashHistory } from 'react-router';

class AlbumViewSidebar extends React.Component {
  constructor(props){
    super(props);

    this.goToGallery = this.goToGallery.bind(this);
  }

  goToGallery(e){
    e.preventDefault();
    let firstPhotoSet = this.props.album.photo_sets[0];
    hashHistory.push(`/gallery/${this.props.album.id}/photo_set/${firstPhotoSet.id}`);
  }

  render(){

    return(
      <nav className="album-view-sidebar">
        <AlbumInfoContainer album={this.props.album}/>
        <PhotoSetIndexContainer album={this.props.album} />
        <div className="gallery-link">
          <button onClick={this.goToGallery} >View</button>
        </div>
      </nav>
    );
  }
}

export default AlbumViewSidebar;
