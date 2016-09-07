import { SessionConstants, receiveCurrentUser} from '../actions/session_actions';
import { signup, login, logout } from '../util/session_api_util';
import { receiveLoginErrors, receiveSignupErrors } from '../actions/forms_actions';
import {hashHistory} from 'react-router';

const SessionMiddleware = ({getState, dispatch}) => next => action => {
  let errorCallback;

  switch (action.type) {
    case SessionConstants.SIGNUP:
      const signupSuccess = (data) => (dispatch(receiveCurrentUser(data)));
      errorCallback = (xhr) => {
        const errors = xhr.responseJSON;
        dispatch(receiveSignupErrors(errors));
      };
      signup(action.user, signupSuccess, errorCallback);
      return next(action);
    case SessionConstants.LOGIN:
      const loginSuccess = (data) => {
        dispatch(receiveCurrentUser(data));
      };
      errorCallback = (xhr) => {
        const errors = xhr.responseJSON;
        dispatch(receiveLoginErrors(errors));
      };
      login(action.user, loginSuccess, errorCallback);
      return next(action);
    case SessionConstants.LOGOUT:
      const logoutSuccess = () => next(action);
      logout(logoutSuccess);
      break;
    default:
      return next(action);
  }
};


export default SessionMiddleware;
