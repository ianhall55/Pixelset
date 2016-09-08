import { GalleriesConstants } from '../actions/galleries_actions';
import { merge } from 'lodash';


const GalleriesReducer = function(state = {}, action){

  switch (action.type) {
    case GalleriesConstants.RECEIVE_GALLERY:
      return action.gallery;
    default:
      return state;
  }
};

export default GalleriesReducer;
