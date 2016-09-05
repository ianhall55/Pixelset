export const PhotoConstants = {
  FETCH_PHOTOS_FOR_PHOTOSET: "FETCH_PHOTOS_FOR_PHOTOSET",
  ADD_PHOTO: "ADD_PHOTO",
  FETCH_PHOTO: "FETCH_PHOTO",
  UPDATE_PHOTO: "UPDATE_PHOTO",
  DESTROY_PHOTO: "DESTROY_PHOTO",
  RECEIVE_ALL_PHOTOS: "RECEIVE_ALL_PHOTOS",
  RECEIVE_SINGLE_PHOTO: "RECEIVE_SINGLE_PHOTO",
  RECEIVE_NEW_PHOTO: "RECEIVE_NEW_PHOTO",
  REMOVE_PHOTO: "REMOVE_PHOTO",
  REMOVE_PHOTO_DETAIL: "REMOVE_PHOTO_DETAIL"
};

export const fetchPhotosForPhotoSet = (photoSet) => ({
  type: PhotoConstants.FETCH_PHOTOS_FOR_PHOTOSET,
  photoSet
});

export const addPhoto = (albumId, photo, success) => ({
  type: PhotoConstants.ADD_PHOTO,
  albumId,
  photo,
  success
});

export const fetchPhoto = (albumId, photoSetId, photoId) => ({
  type: PhotoConstants.FETCH_PHOTO,
  albumId,
  photoSetId,
  photoId
});

export const updatePhoto = (photo, success) => ({
  type: PhotoConstants.UPDATE_PHOTO,
  photo,
  success
});

export const destroyPhoto = (photo) => ({
  type: PhotoConstants.DESTROY_PHOTO,
  photo
});

export const receiveAllPhotos = (photos) => ({
  type: PhotoConstants.RECEIVE_ALL_PHOTOS,
  photos
});

export const receiveSinglePhoto = (photo) => ({
  type: PhotoConstants.RECEIVE_SINGLE_PHOTO,
  photo
});

export const receiveNewPhoto = (photo) => ({
  type: PhotoConstants.RECEIVE_NEW_PHOTO,
  photo
});

export const removePhoto = (photo) => ({
  type: PhotoConstants.REMOVE_PHOTO,
  photo
});

export const removePhotoDetail = () => ({
  type: PhotoConstants.REMOVE_PHOTO_DETAIL
});
