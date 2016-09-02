import { AlbumConstants, receiveAllAlbums, receiveAlbum,
  removeAlbum } from '../actions/albums_actions';
import { fetchAlbumsForUser, addAlbum, fetchAlbum, updateAlbum, destroyAlbum } from '../util/albums_api_util';
import { receiveCreateAlbumErrors, receiveUpdateAlbumErrors } from '../actions/forms_actions';

const AlbumsMiddleware = ({getState, dispatch}) => next => action => {
  let errorCallback;

  switch (action.type) {
    case AlbumConstants.FETCH_ALBUMS_FOR_USER:
      const fetchAlbumsSuccess = (data) => (dispatch(receiveAllAlbums(data)));
      fetchAlbumsForUser(action.user, fetchAlbumsSuccess, errorCallback);
      return next(action);
    case AlbumConstants.ADD_ALBUM:
      const addAlbumSuccess = (data) => {
        dispatch(receiveAlbum(data));
        action.success();
      };
      errorCallback = (xhr) => {
        const errors = xhr.responseJSON;
        dispatch(receiveCreateAlbumErrors(errors));
      };
      addAlbum(action.album, addAlbumSuccess, errorCallback);
      return next(action);
    case AlbumConstants.FETCH_ALBUM:
      const fetchAlbumSuccess = (data) => (dispatch(receiveAlbum(data)));
      fetchAlbum(action.id, fetchAlbumSuccess, errorCallback);
      return next(action);
    case AlbumConstants.UPDATE_ALBUM:
      const updateAlbumSuccess = (data) => {
        dispatch(receiveAlbum(data));
        action.success();
      };
      errorCallback = (xhr) => {
        const errors = xhr.responseJSON;
        dispatch(receiveUpdateAlbumErrors(errors));
      };
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
