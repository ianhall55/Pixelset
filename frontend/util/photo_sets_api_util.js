
export const fetchPhotoSetsForAlbum = function(albumId, success, error) {
  $.ajax({
    method: 'GET',
    url: `api/albums/${albumId}/photo_sets`,
    success,
    error
  });
};

export const fetchPhotoSet = function(albumId, photoSetId, success, error) {
  $.ajax({
    method: 'GET',
    url: `api/albums/${albumId}/photo_sets/${photoSetId}`,
    success,
    error
  });
};


export const addPhotoSet = function(photoSet, success, error) {
  $.ajax({
    method: 'POST',
    url: `api/albums/${photoSet.album_id}/photo_sets`,
    data: photoSet,
    success,
    error
  });
};

export const updatePhotoSet = function( photoSet, success, error) {
  $.ajax({
    method: 'PATCH',
    url: `api/albums/${photoSet.album_id}/photo_sets/${photoSet.id}`,
    data: photoSet,
    success,
    error
  });
};

export const destroyPhotoSet = function( photoSet, success, error) {
  $.ajax({
    method: 'DELETE',
    url: `api/albums/${photoSet.album_id}/photo_sets/${photoSet.id}`,
    data: photoSet,
    success,
    error
  });
};
