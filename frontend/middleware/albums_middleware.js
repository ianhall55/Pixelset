import { AlbumConstants, receiveAllAlbums, receiveAlbum } from '../actions/albums_actions';
import { fetchAlbumsForUser } from '../util/albums_api_util';

const AlbumsMiddleware = ({getState, dispatch}) => next => action => {
  const errorCallback = (xhr) => {
    // const errors = xhr.responseJSON;
    // dispatch(receiveErrors(errors));
  };
  switch (action.type) {
    case AlbumConstants.FETCH_ALBUMS_FOR_USER:
      const fetchAlbumsSuccess = (data) => (dispatch(receiveAllAlbums(data)));
      fetchAlbumsForUser(action.user, fetchAlbumsSuccess, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};


export default AlbumsMiddleware;
