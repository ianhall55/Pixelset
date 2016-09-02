import {connect} from 'react-redux';
import React from 'react';
import AlbumInfo from './album_Info.jsx';
import { updateAlbum } from '../../../../actions/albums_actions';

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  updateAlbum: (album) => dispatch(updateAlbum(album))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumInfo);
