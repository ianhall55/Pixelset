export const AlbumConstants = {
  FETCH_ALBUMS_FOR_USER: "FETCH_ALBUMS_FOR_USER",
  ADD_ALBUM: "ADD_ALBUM",
  FETCH_ALBUM: "FETCH_ALBUM",
  UPDATE_ALBUM: "UPDATE_ALBUM",
  DESTROY_ALBUM: "DESTROY_ALBUM",
  RECEIVE_ALL_ALBUMS: "RECEIVE_ALL_ALBUMS",
  RECEIVE_ALBUM: "RECEIVE_ALBUM",
  REMOVE_ALBUM: "REMOVE_ALBUM"
};

export const fetchAlbumsForUser = (user) => ({
  type: AlbumConstants.FETCH_ALBUMS_FOR_USER,
  user
});

export const addAlbum = (album, success) => ({
  type: AlbumConstants.ADD_ALBUM,
  album,
  success
});

export const fetchAlbum = (id) => ({
  type: AlbumConstants.FETCH_ALBUM,
  id
});

export const updateAlbum = (album, success) => ({
  type: AlbumConstants.UPDATE_ALBUM,
  album,
  success
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
