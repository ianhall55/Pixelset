import {connect} from 'react-redux';
import React from 'react';
import DeletePhotoForm from './delete_photo_form.jsx';
import { destroyPhoto } from '../../../../../actions/photos_actions';
import { clearErrors } from '../../../../../actions/forms_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  destroyPhoto: (photos, success) => dispatch(destroyPhoto(photos, success)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeletePhotoForm);
