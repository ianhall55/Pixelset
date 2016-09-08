import {connect} from 'react-redux';
import React from 'react';
import GalleryHeader from './gallery_header.jsx';


const mapStateToProps = state => ({
  gallery: state.gallery,
  photoSets: state.gallery.photo_sets,
  photoSetDetail: state.photoSetDetail
});

export default connect(
  mapStateToProps
)(GalleryHeader);
