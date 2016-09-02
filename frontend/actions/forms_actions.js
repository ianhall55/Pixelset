export const FormConstants = {
  LOGIN_ERRORS: "LOGIN_ERRORS",
  SIGNUP_ERRORS: "SIGNUP_ERRORS",
  CREATE_ALBUM_ERRORS: "CREATE_ALBUM_ERRORS",
  UPDATE_ALBUM_ERRORS: "UPDATE_ALBUM_ERRORS",
  CLEAR_ERRORS: "CLEAR_ERRORS",
  CREATE_PHOTOSET_ERRORS: "CREATE_PHOTOSET_ERRORS",
  UPDATE_PHOTOSET_ERRORS: "UPDATE_PHOTOSET_ERRORS"
};

export const receiveLoginErrors = errors => ({
  type: FormConstants.LOGIN_ERRORS,
  errors
});

export const receiveSignupErrors = errors => ({
  type: FormConstants.SIGNUP_ERRORS,
  errors
});

export const receiveCreateAlbumErrors = errors => ({
  type: FormConstants.CREATE_ALBUM_ERRORS,
  errors
});

export const receiveUpdateAlbumErrors = errors => ({
  type: FormConstants.UPDATE_ALBUM_ERRORS,
  errors
});

export const receiveCreatePhotoSetErrors = errors => ({
  type: FormConstants.CREATE_PHOTOSET_ERRORS,
  errors
});

export const receiveUpdatePhotoSetErrors = errors => ({
  type: FormConstants.UPDATE_PHOTOSET_ERRORS,
  errors
});

export const clearErrors = errors => ({
  type: FormConstants.CLEAR_ERRORS
});
