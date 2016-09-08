export const GalleriesConstants = {
  FETCH_GALLERY: "FETCH_GALLERY",
  RECEIVE_GALLERY: "RECEIVE_GALLERY"
};

export const fetchGallery = (albumId, success) => ({
  type: GalleriesConstants.FETCH_GALLERY,
  albumId,
  success
});

export const receiveGallery = gallery => ({
  type: GalleriesConstants.RECEIVE_GALLERY,
  gallery
});
