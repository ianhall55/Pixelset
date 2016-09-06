import { connect } from 'react-redux';
import AppRouter from './app_router';
import { fetchPhotosForPhotoSet } from '../../actions/photos_actions';
import { fetchPhotoSet } from '../../actions/photo_sets_actions';
const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchPhotosForPhotoSet: (albumId, photoSetId) => dispatch(fetchPhotosForPhotoSet(albumId, photoSetId)),
  fetchPhotoSet: (albumId, photoSetId) => dispatch(fetchPhotoSet(albumId, photoSetId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
