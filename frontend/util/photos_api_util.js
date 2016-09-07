
export const fetchPhotosForPhotoSet = function(albumId, photoSetId, success) {
  $.ajax({
    method: 'GET',
    url: `api/albums/${albumId}/photo_sets/${photoSetId}/photos`,
    success
  });
};

export const fetchPhoto = function(photoId, success, error) {
  $.ajax({
    method: 'GET',
    url: `api/albums/1/photo_sets/1/photos/${photoId}`,
    success,
    error
  });
};


export const addPhoto = function(albumId, photoSetId, photo, success, error) {
  $.ajax({
    method: 'POST',
    url: `api/albums/${albumId}/photo_sets/${photoSetId}/photos`,
    data: photo,
    success,
    error
  });
};

export const destroyPhoto = function( photos, success, error ) {
  $.ajax({
    method: 'DELETE',
    url: `api/albums/1/photo_sets/1/photos/1`,
    data: photos,
    success,
    error
  });
};
// export const updatePhoto = function(albumId, photoSetId, photo, success, error) {
//   $.ajax({
//     method: 'PATCH',
//     url: `api/albums/${albumId}/photo_sets/${photoSetId}/photos/${photo.id}`,
//     data: photo,
//     success,
//     error
//   });
// };
//
