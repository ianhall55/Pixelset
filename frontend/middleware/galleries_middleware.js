import { GalleriesConstants, receiveGallery } from '../actions/galleries_actions';
import { fetchGallery } from '../util/galleries_api_util';

import { withRouter, hashHistory } from 'react-router';

const GalleriesMiddleware = ({getState, dispatch}) => next => action => {
  let errorCallback;
  switch (action.type) {
    case GalleriesConstants.FETCH_GALLERY:
      const fetchGallerySuccess = (data) => {
        dispatch(receiveGallery(data));
        action.success();
      };
      fetchGallery(action.albumId, fetchGallerySuccess);
      return next(action);
    default:
      return next(action);
  }
};


export default GalleriesMiddleware;
