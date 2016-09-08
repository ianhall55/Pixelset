import {connect} from 'react-redux';
import React from 'react';
import GalleryPhotoSet from './gallery_photo_set.jsx';


const mapStateToProps = state => ({
  photoSet: state.photoSetDetail
});



export default connect(
  mapStateToProps
)(GalleryPhotoSet);
