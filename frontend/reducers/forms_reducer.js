import { FormConstants } from '../actions/forms_actions';
import { merge } from 'lodash';

const _defaultState = {
  login: {errors: []},
  signup: {errors: []},
  createAlbum: {errors: []},
  updateAlbum: {errors: []}
};

const FormsReducer = function(state = _defaultState, action){
  let errors;
  let newState;

  switch (action.type) {
    case FormConstants.LOGIN_ERRORS:
      errors = action.errors;
      newState = merge({}, state);
      newState.login.errors = errors;
      return newState;
    case FormConstants.SIGNUP_ERRORS:
      errors = action.errors;
      newState = merge({}, state);
      newState.signup.errors = errors;
      return newState;
    case FormConstants.CREATE_ALBUM_ERRORS:
      errors = action.errors;
      newState = merge({}, state);
      newState.createAlbum.errors = errors;
      return newState;
    case FormConstants.UPDATE_ALBUM_ERRORS:
      errors = action.errors;
      newState = merge({}, state);
      newState.signin.errors = errors;
      return newState;
    case FormConstants.CLEAR_ERRORS:
      return _defaultState;
    default:
      return state;
  }
};

export default FormsReducer;
