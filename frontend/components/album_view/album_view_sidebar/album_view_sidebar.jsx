import React from 'react';
import AlbumInfoContainer from './album_info/album_info_container.jsx';
import PhotoSetIndexContainer from '../photo_set/photo_set_index_container.jsx';

class AlbumViewSidebar extends React.Component {
  constructor(props){
    super(props);
  }


  render(){

    return(
      <nav className="album-view-sidebar">
        <AlbumInfoContainer album={this.props.album}/>
        <PhotoSetIndexContainer album={this.props.album} />
      </nav>
    );
  }
}

export default AlbumViewSidebar;
