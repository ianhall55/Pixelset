import { AlbumConstants } from '../actions/albums_actions';
import { merge } from 'lodash';


const AlbumsReducer = function(state = {}, action){
  switch (action.type) {
    case AlbumConstants.RECEIVE_ALL_ALBUMS:
      return action.albums;
    case AlbumConstants.RECEIVE_ALBUM:
      const album = action.album;
      return merge({}, state, album);
    case AlbumConstants.REMOVE_ALBUM:
      const albumId = action.album.id;
      const newState = merge({}, state);
      delete newState[albumId];
      return newState;
    case AlbumConstants.RECEIVE_ALBUM_ERRORS:
      const errors = action.errors;
      return merge({}, state, {errors});
    default:
      return state;
  }
};

export default AlbumsReducer;
