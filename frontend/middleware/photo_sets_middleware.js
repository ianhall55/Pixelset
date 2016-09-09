import { PhotoSetConstants, receiveAllPhotoSets, receiveNewPhotoSet, receiveSinglePhotoSet,
  removePhotoSet, removePhotoSetDetail } from '../actions/photo_sets_actions';
import { fetchPhotoSetsForAlbum, addPhotoSet, fetchPhotoSet,
  updatePhotoSet, destroyPhotoSet } from '../util/photo_sets_api_util';
import { receiveCreatePhotoSetErrors, receiveUpdatePhotoSetErrors } from '../actions/forms_actions';
import { withRouter, hashHistory } from 'react-router';

const PhotoSetsMiddleware = ({getState, dispatch}) => next => action => {
  let errorCallback;
  let photoSet;
  switch (action.type) {
    case PhotoSetConstants.FETCH_PHOTOSETS_FOR_ALBUM:
      const fetchPhotoSetsSuccess = (data) => (dispatch(receiveAllPhotoSets(data)));
      fetchPhotoSetsForAlbum(action.albumId, fetchPhotoSetsSuccess, errorCallback);
      return next(action);
    case PhotoSetConstants.ADD_PHOTOSET:
      const addPhotoSetSuccess = (data) => {
        dispatch(receiveNewPhotoSet(data));
        photoSet = data[Object.keys(data)[0]];
        dispatch(receiveSinglePhotoSet(data[photoSet.id]));
        hashHistory.push(`/album/${photoSet.album_id}/photo_set/${photoSet.id}`);
        action.success();
      };
      errorCallback = (xhr) => {
        const errors = xhr.responseJSON;
        dispatch(receiveCreatePhotoSetErrors(errors));
      };
      addPhotoSet(action.photo_set, addPhotoSetSuccess, errorCallback);
      return next(action);
    case PhotoSetConstants.FETCH_PHOTOSET:
      const fetchPhotoSetSuccess = (data) => (dispatch(receiveSinglePhotoSet(data)));
      fetchPhotoSet(action.albumId, action.photoSetId, fetchPhotoSetSuccess, errorCallback);
      return next(action);
    case PhotoSetConstants.UPDATE_PHOTOSET:
      const updatePhotoSetSuccess = (data) => {
        dispatch(receiveNewPhotoSet(data));
        photoSet = data[Object.keys(data)[0]];
        dispatch(receiveSinglePhotoSet(data[photoSet.id]));
        hashHistory.push(`/album/${photoSet.album_id}/photo_set/${photoSet.id}`);
        action.success();
      };
      errorCallback = (xhr) => {
        const errors = xhr.responseJSON;
        dispatch(receiveUpdatePhotoSetErrors(errors));
      };
      updatePhotoSet(action.photo_set, updatePhotoSetSuccess, errorCallback);
      return next(action);
    case PhotoSetConstants.DESTROY_PHOTOSET:
      const destroyPhotoSetSuccess = (data) => {
        action.success();
        dispatch(removePhotoSet(data));
        hashHistory.push(`/album/${data.album_id}`);
        dispatch(removePhotoSetDetail());
      };
      destroyPhotoSet(action.photo_set, destroyPhotoSetSuccess, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};


export default PhotoSetsMiddleware;
