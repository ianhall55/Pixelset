import {connect} from 'react-redux';
import React from 'react';
import UpdatePhotoSetForm from './photo_set_update_form.jsx';
import { updatePhotoSet } from '../../../../actions/photo_sets_actions';
import { clearErrors } from '../../../../actions/forms_actions';


const mapStateToProps = state => ({
  errors: state.forms.updateAlbum.errors
});

const mapDispatchToProps = dispatch => ({
  updatePhotoSet: (photoSet, success) => dispatch(updatePhotoSet(photoSet, success)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdatePhotoSetForm);
