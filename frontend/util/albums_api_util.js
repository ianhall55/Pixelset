
export const fetchAlbumsForUser = function(user, success, error) {
  $.ajax({
    method: 'GET',
    url: 'api/albums',
    data: user,
    success,
    error
  });
};

export const addAlbum = function(album, success, error) {
  $.ajax({
    method: 'POST',
    url: 'api/albums',
    data: album,
    success,
    error
  });
};

export const fetchAlbum = function(albumId, success, error) {
  $.ajax({
    method: 'GET',
    url: `api/albums/${albumId}`,
    success,
    error
  });
};

export const updateAlbum = function(album, success, error) {
  $.ajax({
    method: 'PATCH',
    url: `api/albums/${album.id}`,
    data: album,
    success,
    error
  });
};

export const destroyAlbum = function(album, success, error) {
  $.ajax({
    method: 'DELETE',
    url: `api/albums/${album.id}`,
    data: album,
    success,
    error
  });
};
