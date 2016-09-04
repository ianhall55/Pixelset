import React from 'react';
import HomeHeaderContainer from '../../home_header/home_header_container.jsx';
import Modal from 'react-modal';
import ModalStyle from '../../modal_styles';
import AlbumViewSidebar from '../album_view_sidebar/album_view_sidebar.jsx';
import { withRouter } from 'react-router';

class AlbumView extends React.Component {
  constructor(props){
    super(props);

    this.state = {
     albumId: this.props.params.albumId,
   };
  }

  componentDidMount(){
    this.props.fetchAlbum(this.state.albumId);
  }



  render() {
    
    const album = this.props.albums[this.state.albumId];
    if (album) {
      return(
        <div className="album-view-page">
          <HomeHeaderContainer album={album} />
          <AlbumViewSidebar album={album} />
          {this.props.children}
        </div>
      );
    } else {
      return(
        <div>AlbumView</div>
      );
    }
  }
}


export default AlbumView;
