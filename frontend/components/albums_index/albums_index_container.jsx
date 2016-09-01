import {connect} from 'react-redux';
import React from 'react';
import AlbumsIndex from './albums_index.jsx';
import { fetchAlbumsForUser } from '../../actions/albums_actions';

const mapStateToProps = state => ({
  albums: state.albums,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchAlbumsForUser: (user) => dispatch(fetchAlbumsForUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumsIndex);
