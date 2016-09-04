import {connect} from 'react-redux';
import React from 'react';
import CreatePhotoSetForm from './create_photo_set_form.jsx';
import { addPhotoSet } from '../../../../actions/photo_sets_actions';
import { clearErrors } from '../../../../actions/forms_actions';


const mapStateToProps = state => ({
  errors: state.forms.createPhotoSet.errors
});

const mapDispatchToProps = dispatch => ({
  addPhotoSet: (photoSet, success) => dispatch(addPhotoSet(photoSet, success)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePhotoSetForm);
