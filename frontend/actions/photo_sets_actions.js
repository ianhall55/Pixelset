export const PhotoSetConstants = {
  FETCH_PHOTOSETS_FOR_ALBUM: "FETCH_PHOTOSETS_FOR_ALBUM",
  ADD_PHOTOSET: "ADD_PHOTOSET",
  FETCH_PHOTOSET: "FETCH_PHOTOSET",
  UPDATE_PHOTOSET: "UPDATE_PHOTOSET",
  DESTROY_PHOTOSET: "DESTROY_PHOTOSET",
  RECEIVE_ALL_PHOTOSETS: "RECEIVE_ALL_PHOTOSETS",
  RECEIVE_SINGLE_PHOTOSET: "RECEIVE_SINGLE_PHOTOSET",
  RECEIVE_NEW_PHOTOSET: "RECEIVE_NEW_PHOTOSET",
  REMOVE_PHOTOSET: "REMOVE_PHOTOSET",
  REMOVE_PHOTOSET_DETAIL: "REMOVE_PHOTOSET_DETAIL"
};

export const fetchPhotoSetsForAlbum = (albumId) => ({
  type: PhotoSetConstants.FETCH_PHOTOSETS_FOR_ALBUM,
  albumId
});

export const addPhotoSet = (photo_set, success) => ({
  type: PhotoSetConstants.ADD_PHOTOSET,
  photo_set,
  success
});

export const fetchPhotoSet = (albumId, photoSetId) => ({
  type: PhotoSetConstants.FETCH_PHOTOSET,
  albumId,
  photoSetId
});

export const updatePhotoSet = (photo_set, success) => ({
  type: PhotoSetConstants.UPDATE_PHOTOSET,
  photo_set,
  success
});

export const destroyPhotoSet = (photo_set, success) => ({
  type: PhotoSetConstants.DESTROY_PHOTOSET,
  photo_set,
  success
});

export const receiveAllPhotoSets = (photoSets) => ({
  type: PhotoSetConstants.RECEIVE_ALL_PHOTOSETS,
  photoSets
});

export const receiveSinglePhotoSet = (photoSet) => ({
  type: PhotoSetConstants.RECEIVE_SINGLE_PHOTOSET,
  photoSet
});

export const receiveNewPhotoSet = (photoSet) => ({
  type: PhotoSetConstants.RECEIVE_NEW_PHOTOSET,
  photoSet
});

export const removePhotoSet = (photoSet) => ({
  type: PhotoSetConstants.REMOVE_PHOTOSET,
  photoSet
});

export const removePhotoSetDetail = () => ({
  type: PhotoSetConstants.REMOVE_PHOTOSET_DETAIL
});
