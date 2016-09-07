import React from 'react';
import HomeHeaderContainer from '../../home_header/home_header_container.jsx';
import AlbumViewSidebar from '../album_view_sidebar/album_view_sidebar.jsx';
import { withRouter, hashHistory } from 'react-router';

class AlbumView extends React.Component {
  constructor(props){
    super(props);

    this.goToFirstPhotoSet = this.goToFirstPhotoSet.bind(this);
    this.state = {
     albumId: this.props.params.albumId,
   };
  }

  componentDidMount(){
    this.props.fetchAlbum(this.state.albumId, this.goToFirstPhotoSet);
  }

  goToFirstPhotoSet(){
    let album = this.props.albums[this.state.albumId];
    let photoSet = album.photo_sets[0];
    if (photoSet){
      hashHistory.push(`album/${album.id}/photo_set/${photoSet.id}`);
    }
  }

  render() {
    const album = this.props.albums[this.state.albumId];
    if (album) {
      return(
        <div className="album-view-page">
          <HomeHeaderContainer album={album} />
          <section className="album-content">
            <AlbumViewSidebar album={album} />
            {this.props.children}
          </section>

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
