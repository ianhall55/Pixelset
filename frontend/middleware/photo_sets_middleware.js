import { PhotoSetConstants, receiveAllPhotoSets, receivePhotoSet,
  removePhotoSet } from '../actions/photo_sets_actions';
import { fetchPhotoSetsForAlbum, addPhotoSet, fetchPhotoSet,
  updatePhotoSet, destroyPhotoSet } from '../util/photo_sets_api_util';
import { receiveCreatePhotoSetErrors, receiveUpdatePhotoSetErrors } from '../actions/forms_actions';

const PhotoSetsMiddleware = ({getState, dispatch}) => next => action => {
  let errorCallback;

  switch (action.type) {
    case PhotoSetConstants.FETCH_PHOTOSETS_FOR_ALBUM:
      const fetchPhotoSetsSuccess = (data) => (dispatch(receiveAllPhotoSets(data)));
      fetchPhotoSetsForAlbum(action.albumId, fetchPhotoSetsSuccess, errorCallback);
      return next(action);
    case PhotoSetConstants.ADD_PHOTOSET:
      const addPhotoSetSuccess = (data) => {
        dispatch(receivePhotoSet(data));
        action.success();
      };
      errorCallback = (xhr) => {
        const errors = xhr.responseJSON;
        dispatch(receiveCreatePhotoSetErrors(errors));
      };
      addPhotoSet(action.photo_set, addPhotoSetSuccess, errorCallback);
      return next(action);
    case PhotoSetConstants.FETCH_PHOTOSET:
      const fetchPhotoSetSuccess = (data) => (dispatch(receivePhotoSet(data)));
      fetchPhotoSet(action.albumId, fetchPhotoSetSuccess, errorCallback);
      return next(action);
    case PhotoSetConstants.UPDATE_PHOTOSET:
    debugger;
      const updatePhotoSetSuccess = (data) => {
        dispatch(receivePhotoSet(data));
        action.success();
      };
      errorCallback = (xhr) => {
        const errors = xhr.responseJSON;
        dispatch(receiveUpdatePhotoSetErrors(errors));
      };
      updatePhotoSet(action.photo_set, updatePhotoSetSuccess, errorCallback);
      return next(action);
    case PhotoSetConstants.DESTROY_PHOTOSET:
      const destroyPhotoSetSuccess = (data) => (dispatch(removePhotoSet(data)));
      destroyPhotoSet(action.photo_set, destroyPhotoSetSuccess, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};


export default PhotoSetsMiddleware;
