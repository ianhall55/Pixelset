import { PhotoConstants, receiveAllPhotos, receiveNewPhoto,
  receiveCoverPhoto, removePhoto } from '../actions/photos_actions';
import { fetchPhotosForPhotoSet, addPhoto, fetchPhoto,
  destroyPhoto } from '../util/photos_api_util';
// import { receiveCreatePhotoErrors, receiveUpdatePhotoErrors } from '../actions/forms_actions';
import { withRouter, hashHistory } from 'react-router';

const PhotosMiddleware = ({getState, dispatch}) => next => action => {
  let errorCallback;
  let photo;
  switch (action.type) {
    case PhotoConstants.FETCH_PHOTOS_FOR_PHOTOSET:
      const fetchPhotosSuccess = (data) => (dispatch(receiveAllPhotos(data)));
      fetchPhotosForPhotoSet(action.albumId, action.photoSetId, fetchPhotosSuccess);
      return next(action);
    case PhotoConstants.ADD_PHOTO:
      const addPhotoSuccess = (data) => {
        dispatch(receiveNewPhoto(data));
      };
      errorCallback = (xhr) => {
        const errors = xhr.responseJSON;
        // dispatch(receiveCreatePhotoErrors(errors));
      };
      addPhoto(action.albumId, action.photo.photo.photo_set_id,
          action.photo, addPhotoSuccess, errorCallback);
      return next(action);
    case PhotoConstants.FETCH_PHOTO:
      const fetchPhotoSuccess = (data) => (dispatch(receiveCoverPhoto(data)));
      fetchPhoto(action.photoId, fetchPhotoSuccess, errorCallback);
      return next(action);
    // case PhotoConstants.UPDATE_PHOTOSET:
    //   const updatePhotoSuccess = (data) => {
    //     dispatch(receiveNewPhoto(data));
    //     photo = data[Object.keys(data)[0]];
    //     dispatch(receiveSinglePhoto(data[photo.id]));
    //     hashHistory.push(`/album/${photo.album_id}/photo_set/${photo.id}`);
    //     action.success();
    //   };
    //   errorCallback = (xhr) => {
    //     const errors = xhr.responseJSON;
    //     dispatch(receiveUpdatePhotoErrors(errors));
    //   };
    //   updatePhoto(action.photo_set, updatePhotoSuccess, errorCallback);
    //   return next(action);
    case PhotoConstants.DESTROY_PHOTO:
      const destroyPhotoSuccess = (data) => {
        action.success();
        dispatch(removePhoto(data));
      };
      destroyPhoto(action.photos, destroyPhotoSuccess, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};


export default PhotosMiddleware;
