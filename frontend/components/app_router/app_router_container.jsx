import { connect } from 'react-redux';
import AppRouter from './app_router';
import { fetchPhotoSet } from '../../actions/photo_sets_actions';
const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchPhotoSet: (albumId, photoSetId) => dispatch(fetchPhotoSet(albumId, photoSetId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
