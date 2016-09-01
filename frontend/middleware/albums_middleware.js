import { AlbumConstants, receiveAllAlbums, receiveAlbum,
  removeAlbum, receiveAlbumErrors } from '../actions/albums_actions';
import { fetchAlbumsForUser, addAlbum, fetchAlbum, updateAlbum, destroyAlbum } from '../util/albums_api_util';

const AlbumsMiddleware = ({getState, dispatch}) => next => action => {
  const errorCallback = (xhr) => {
    const errors = xhr.responseJSON;
    dispatch(receiveAlbumErrors(errors));
  };
  switch (action.type) {
    case AlbumConstants.FETCH_ALBUMS_FOR_USER:
      const fetchAlbumsSuccess = (data) => (dispatch(receiveAllAlbums(data)));
      fetchAlbumsForUser(action.user, fetchAlbumsSuccess, errorCallback);
      return next(action);
    case AlbumConstants.ADD_ALBUM:
      const addAlbumSuccess = (data) => (dispatch(receiveAlbum(data)));
      addAlbum(action.album, addAlbumSuccess, errorCallback);
      return next(action);
    case AlbumConstants.FETCH_ALBUM:
      const fetchAlbumSuccess = (data) => (dispatch(receiveAlbum(data)));
      fetchAlbum(action.id, fetchAlbumSuccess, errorCallback);
      return next(action);
    case AlbumConstants.UPDATE_ALBUM:
      const updateAlbumSuccess = (data) => (dispatch(receiveAlbum(data)));
      updateAlbum(action.album, updateAlbumSuccess, errorCallback);
      return next(action);
    case AlbumConstants.DESTROY_ALBUM:
      const destroyAlbumSuccess = (data) => (dispatch(removeAlbum(data)));
      destroyAlbum(action.album, destroyAlbumSuccess, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};


export default AlbumsMiddleware;
