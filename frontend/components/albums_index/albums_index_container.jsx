import {connect} from 'react-redux';
import React from 'react';
import AlbumsIndex from './albums_index.jsx';

const mapStateToProps = state => ({
  albums: state.albums
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumsIndex);
