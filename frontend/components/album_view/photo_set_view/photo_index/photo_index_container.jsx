import {connect} from 'react-redux';
import React from 'react';
import PhotosIndex from './photo_index.jsx';
import { fetchPhotosForPhotoSet, addPhoto } from '../../../../actions/photos_actions';

const mapStateToProps = state => ({
  photos: state.photos,
  photoSet: state.photoSetDetail
});

const mapDispatchToProps = dispatch => ({
  fetchPhotosForPhotoSet: (photoSet) => (dispatch(fetchPhotosForPhotoSet(photoSet))),
  addPhoto: (albumId, photo) => (dispatch(addPhoto(albumId, photo)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotosIndex);
