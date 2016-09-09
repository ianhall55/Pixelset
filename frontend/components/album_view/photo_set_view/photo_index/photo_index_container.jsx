import {connect} from 'react-redux';
import React from 'react';
import PhotosIndex from './photo_index.jsx';
import { fetchPhotosForPhotoSet, addPhoto } from '../../../../actions/photos_actions';
import { updateAlbum } from '../../../../actions/albums_actions';

const mapStateToProps = state => ({
  photos: state.photos,
  photoSet: state.photoSetDetail,
  albums: state.albums
});

const mapDispatchToProps = dispatch => ({
  fetchPhotosForPhotoSet: (photoSet) => (dispatch(fetchPhotosForPhotoSet(photoSet))),
  addPhoto: (albumId, photo) => (dispatch(addPhoto(albumId, photo))),
  updateAlbum: (album, success) => (dispatch(updateAlbum(album, success)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotosIndex);
