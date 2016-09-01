import { SessionConstants } from '../actions/session_actions';
import { merge } from 'lodash';
import {hashHistory} from 'react-router';

const _defaultState = {
  currentUser: null
};

const SessionReducer = function(state = _defaultState, action){
  switch (action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      console.log(currentUser);
      hashHistory.push("/home");
      return merge({}, _defaultState, {currentUser});
    case SessionConstants.LOGOUT:
      return _defaultState;
    default:
      return state;
  }
};

export default SessionReducer;
