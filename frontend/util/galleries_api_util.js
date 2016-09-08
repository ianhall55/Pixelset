

export const fetchGallery = function(albumId, success, error) {
  $.ajax({
    method: 'GET',
    url: `api/galleries/${albumId}`,
    success,
    error
  });
};
