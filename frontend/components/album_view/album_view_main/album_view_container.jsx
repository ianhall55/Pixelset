import {connect} from 'react-redux';
import React from 'react';
import AlbumView from './album_view.jsx';
import { fetchAlbum } from '../../../actions/albums_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  albums: state.albums
});

const mapDispatchToProps = dispatch => ({
  fetchAlbum: (id, success) => dispatch(fetchAlbum(id, success))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumView);
