import {connect} from 'react-redux';
import React from 'react';
import PhotoGallery from './gallery_photos';

const mapStateToProps = state => ({
  gallery: state.gallery,
  photos: state.photos
});


export default connect(
  mapStateToProps
)(PhotoGallery);
