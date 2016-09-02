import {connect} from 'react-redux';
import React from 'react';
import CreateAlbumForm from './create_album.jsx';
import { addAlbum } from '../../actions/albums_actions';
import { clearErrors } from '../../actions/forms_actions';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.forms.createAlbum.errors
});

const mapDispatchToProps = dispatch => ({
  addAlbum: (album, success) => dispatch(addAlbum(album, success)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAlbumForm);
