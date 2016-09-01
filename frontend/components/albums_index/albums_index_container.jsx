import {connect} from 'react-redux';
import React from 'react';
import AlbumsIndex from './albums_index.jsx';
import { fetchAlbumsForUser, destroyAlbum } from '../../actions/albums_actions';

const mapStateToProps = state => ({
  albums: state.albums,
  currentUser: state.session.currentUser,
  
});

const mapDispatchToProps = dispatch => ({
  fetchAlbumsForUser: (user) => dispatch(fetchAlbumsForUser(user)),
  destroyAlbum: (album) => dispatch(destroyAlbum(album))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumsIndex);
