export const PhotoSetConstants = {
  FETCH_PHOTOSETS_FOR_ALBUM: "FETCH_PHOTOSETS_FOR_ALBUM",
  ADD_PHOTOSET: "ADD_PHOTOSET",
  FETCH_PHOTOSET: "FETCH_PHOTOSET",
  UPDATE_PHOTOSET: "UPDATE_PHOTOSET",
  DESTROY_PHOTOSET: "DESTROY_PHOTOSET",
  RECEIVE_ALL_PHOTOSETS: "RECEIVE_ALL_PHOTOSETS",
  RECEIVE_PHOTOSET: "RECEIVE_PHOTOSET",
  REMOVE_PHOTOSET: "REMOVE_PHOTOSET"
};

export const fetchPhotoSetsForAlbum = (albumId) => ({
  type: PhotoSetConstants.FETCH_PHOTOSETS_FOR_ALBUM,
  albumId
});

export const addPhotoSet = (photoSet, success) => ({
  type: PhotoSetConstants.ADD_PHOTOSET,
  photoSet,
  success
});

export const fetchPhotoSet = (id) => ({
  type: PhotoSetConstants.FETCH_PHOTOSET,
  id
});

export const updatePhotoSet = (photoSet, success) => ({
  type: PhotoSetConstants.UPDATE_PHOTOSET,
  photoSet,
  success
});

export const destroyPhotoSet = (photoSet) => ({
  type: PhotoSetConstants.DESTROY_PHOTOSET,
  photoSet
});

export const receiveAllPhotoSets = (photoSets) => ({
  type: PhotoSetConstants.RECEIVE_ALL_PHOTOSETS,
  photoSets
});

export const receivePhotoSet = (photoSet) => ({
  type: PhotoSetConstants.RECEIVE_PHOTOSET,
  photoSet
});

export const removePhotoSet = (photoSet) => ({
  type: PhotoSetConstants.REMOVE_PHOTOSET,
  photoSet
});
