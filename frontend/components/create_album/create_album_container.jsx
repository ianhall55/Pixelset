import {connect} from 'react-redux';
import React from 'react';
import CreateAlbumForm from './create_album.jsx';
import { addAlbum } from '../../actions/albums_actions';



const mapStateToProps = state => ({
  currentUser: state.session.currentUser
  
});

const mapDispatchToProps = dispatch => ({
  addAlbum: (album) => dispatch(addAlbum(album)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAlbumForm);
