import { PhotoSetConstants } from '../actions/photo_sets_actions';
import { merge } from 'lodash';


const PhotoSetsReducer = function(state = {}, action){
  switch (action.type) {
    case PhotoSetConstants.RECEIVE_ALL_PHOTOSETS:
      return action.photoSets;
    case PhotoSetConstants.RECEIVE_PHOTOSET:
      const photoSet = action.photoSet;
      return merge({}, state, photoSet);
    case PhotoSetConstants.REMOVE_PHOTOSET:
      const photoSetId = action.photoSet.id;
      const newState = merge({}, state);
      delete newState[photoSetId];
      return newState;
    case PhotoSetConstants.RECEIVE_PHOTOSET_ERRORS:
      const errors = action.errors;
      return merge({}, state, {errors});
    default:
      return state;
  }
};

export default PhotoSetsReducer;
