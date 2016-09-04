import {connect} from 'react-redux';
import React from 'react';
import PhotoSetView from './photo_set_view.jsx';
import { fetchPhotoSet } from '../../../actions/photo_sets_actions';

const mapStateToProps = state => ({
  photoSet: state.photoSetDetail
});

const mapDispatchToProps = dispatch => ({
  fetchPhotoSet: (photoSetId) => (dispatch(fetchPhotoSet(photoSetId)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoSetView);
