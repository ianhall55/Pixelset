import {connect} from 'react-redux';
import React from 'react';
import PhotoSetsIndex from './photo_set_index.jsx';
import { fetchPhotoSetsForAlbum, destroyPhotoSet } from '../../../actions/photo_sets_actions';

const mapStateToProps = state => ({
  photoSets: state.photoSets

});

const mapDispatchToProps = dispatch => ({
  fetchPhotoSetsForAlbum: (albumId) => (dispatch(fetchPhotoSetsForAlbum(albumId))),
  destroyPhotoSet: (photoSet) => (dispatch(destroyPhotoSet(photoSet)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoSetsIndex);
