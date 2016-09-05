import { PhotoConstants } from '../actions/photos_actions';
import { merge } from 'lodash';


const PhotosReducer = function(state = {}, action){
  let newState;
  let photo;
  switch (action.type) {
    case PhotoConstants.RECEIVE_ALL_PHOTOS:
      return action.photos;
    case PhotoConstants.RECEIVE_NEW_PHOTO:
      photo = action.photo;
      return merge({}, state, photo);
    case PhotoConstants.REMOVE_PHOTO:
      const photoId = action.photo.id;
      newState = merge({}, state);
      delete newState[photoId];
      return newState;
    case PhotoConstants.RECEIVE_PHOTO_ERRORS:
      const errors = action.errors;
      return merge({}, state, {errors});
    default:
      return state;
  }
};

export default PhotosReducer;
