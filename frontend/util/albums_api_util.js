

export const fetchAlbumsForUser = function(user, success, error) {
  $.ajax({
    method: 'GET',
    url: 'api/albums',
    data: user,
    success,
    error
  });
};
