import { PhotoSetConstants } from '../actions/photo_sets_actions';
import { merge } from 'lodash';


const PhotoSetDetailReducer = function(state = {}, action){
  switch (action.type) {
    case PhotoSetConstants.RECEIVE_SINGLE_PHOTOSET:
      return action.photoSet;
    case PhotoSetConstants.REMOVE_PHOTOSET_DETAIL:
      return {title: ''};
    default:
      return state;
  }
};

export default PhotoSetDetailReducer;
