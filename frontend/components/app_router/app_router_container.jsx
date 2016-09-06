import { connect } from 'react-redux';
import AppRouter from './app_router';
import { fetchPhotosForPhotoSet } from '../../actions/photos_actions';
const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchPhotosForPhotoSet: (albumId, photoSetId) => dispatch(fetchPhotosForPhotoSet(albumId, photoSetId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
