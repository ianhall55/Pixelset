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
      addPhotoSet(action.photoSet, addPhotoSetSuccess, errorCallback);
      return next(action);
    case PhotoSetConstants.FETCH_PHOTOSET:
      const fetchPhotoSetSuccess = (data) => (dispatch(receivePhotoSet(data)));
      fetchPhotoSet(action.albumId, fetchPhotoSetSuccess, errorCallback);
      return next(action);
    case PhotoSetConstants.UPDATE_PHOTOSET:
      const updatePhotoSetSuccess = (data) => {
        dispatch(receivePhotoSet(data));
        action.success();
      };
      errorCallback = (xhr) => {
        const errors = xhr.responseJSON;
        dispatch(receiveUpdatePhotoSetErrors(errors));
      };
      updatePhotoSet(action.photoSet, updatePhotoSetSuccess, errorCallback);
      return next(action);
    case PhotoSetConstants.DESTROY_PHOTOSET:
      const destroyPhotoSetSuccess = (data) => (dispatch(removePhotoSet(data)));
      destroyPhotoSet(action.photoSet, destroyPhotoSetSuccess, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};


export default PhotoSetsMiddleware;
