import {connect} from 'react-redux';
import React from 'react';
import Gallery from './gallery.jsx';
import { fetchGallery } from '../../actions/galleries_actions';

const mapStateToProps = state => ({
  gallery: state.gallery
});

const mapDispatchToProps = dispatch => ({
  fetchGallery: (albumId, success) => dispatch(fetchGallery(albumId, success))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
