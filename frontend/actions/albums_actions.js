export const AlbumConstants = {
  FETCH_ALBUMS_FOR_USER: "FETCH_ALBUMS_FOR_USER",
  ADD_ALBUM: "ADD_ALBUM",
  FETCH_ALBUM: "FETCH_ALBUM",
  UPDATE_ALBUM: "UPDATE_ALBUM",
  DESTROY_ALBUM: "DESTROY_ALBUM",
  RECEIVE_ALL_ALBUMS: "RECEIVE_ALL_ALBUMS",
  RECEIVE_ALBUM: "RECEIVE_ALBUM",
  REMOVE_ALBUM: "REMOVE_ALBUM",
  RECEIVE_ALBUM_ERRORS: "RECEIVE_ALBUM_ERRORS"
};

export const fetchAlbumsForUser = (user) => ({
  type: AlbumConstants.FETCH_ALBUMS_FOR_USER,
  user
});

export const addAlbum = (album) => ({
  type: AlbumConstants.ADD_ALBUM,
  album
});

export const fetchAlbum = (id) => ({
  type: AlbumConstants.FETCH_ALBUM,
  id
});

export const updateAlbum = (album) => ({
  type: AlbumConstants.UPDATE_ALBUM,
  album
});

export const destroyAlbum = (album) => ({
  type: AlbumConstants.DESTROY_ALBUM,
  album
});

export const receiveAllAlbums = (albums) => ({
  type: AlbumConstants.RECEIVE_ALL_ALBUMS,
  albums
});

export const receiveAlbum = (album) => ({
  type: AlbumConstants.RECEIVE_ALBUM,
  album
});

export const removeAlbum = (album) => ({
  type: AlbumConstants.REMOVE_ALBUM,
  album
});

export const receiveAlbumErrors = errors => ({
  type: AlbumConstants.RECEIVE_ALBUM_ERRORS,
  errors
});
