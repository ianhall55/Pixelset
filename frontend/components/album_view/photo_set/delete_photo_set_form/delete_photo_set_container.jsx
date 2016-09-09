import {connect} from 'react-redux';
import React from 'react';
import DeletePhotoSetForm from './delete_photo_set_form.jsx';
import { destroyPhotoSet } from '../../../../actions/photo_sets_actions';


const mapStateToProps = state => ({
  albums: state.albums
});

const mapDispatchToProps = dispatch => ({
  destroyPhotoSet: (photoSet, success) => dispatch(destroyPhotoSet(photoSet, success))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeletePhotoSetForm);
