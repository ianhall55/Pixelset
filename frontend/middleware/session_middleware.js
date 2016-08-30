import { SessionConstants, receiveCurrentUser, receiveErrors } from '../actions/session_actions';
import { signup, login, logout } from '../util/session_api_util';

const SessionMiddleware = ({getState, dispatch}) => next => action => {
  const errorCallback = (xhr) => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch (action.type) {
    case SessionConstants.SIGNUP:
      debugger;
      const signupSuccess = (data) => (dispatch(receiveCurrentUser(data)));
      signup(action.user, signupSuccess, errorCallback);
      return next(action);
    case SessionConstants.LOGIN:
      debugger;
      const loginSuccess = (data) => (dispatch(receiveCurrentUser(data)));
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
