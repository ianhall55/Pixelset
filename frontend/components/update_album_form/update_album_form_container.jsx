import {connect} from 'react-redux';
import React from 'react';
import UpdateAlbumForm from './update_album_form.jsx';
import { updateAlbum } from '../../actions/albums_actions';
import { clearErrors } from '../../actions/forms_actions';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.forms.updateAlbum.errors
});

const mapDispatchToProps = dispatch => ({
  updateAlbum: (album, success) => dispatch(updateAlbum(album, success)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateAlbumForm);
