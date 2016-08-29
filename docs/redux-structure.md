# Redux Structure

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `UserNavbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `UserNavbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Album Cycles

### Albums API Request Actions

* `fetchAlbumsForUser`
  0. invoked from `AlbumIndex` `didMount`/`willReceiveProps`
  0. `GET /api/albums/` is called.
  0. `receiveAllAlbums` is set as the success callback.

* `addAlbum`
  0. invoked from new Album button `onClick`
  0. `POST /api/albums` is called.
  0. `receiveAlbum` is set as the success callback.

* `fetchAlbum`
  0. invoked from `PhotoSetIndex` `didMount`/`willReceiveProps`
  0. `GET /api/albums/:id` is called.
  0. `receiveAlbum` is set as the success callback.

* `updateAlbum`
  0. invoked from `AlbumForm` `onSubmit`
  0. `PATCH /api/albums` is called.
  0. `receiveAlbum` is set as the success callback.

* `destroyDestroy`
  0. invoked from delete album button `onClick`
  0. `DELETE /api/albums/:id` is called.
  0. `removeAlbum` is set as the success callback.

### Albums API Response Actions

* `receiveAllAlbums`
  0. invoked from an API callback
  0. the `AlbumReducer` updates `albums` in the application's state.

* `receiveAlbum`
  0. invoked from an API callback
  0. the `AlbumReducer` updates `albums[id]` in the application's state.

* `removeAlbum`
  0. invoked from an API callback
  0. the `AlbumReducer` removes `albums[id]` from the application's state.

## PhotoSet Cycles

### PhotoSets API Request Actions

* `fetchPhotoSetsForAlbum`
  0. invoked from `PhotoSetIndex` `didMount`/`willReceiveProps`
  0. `GET /api/albums/[:id]/set` is called.
  0. `receiveAllPhotoSets` is set as the success callback.

* `addPhotoSet`
  0. invoked from new PhotoSet button `onClick`
  0. `POST /api/albums/[:id]/set` is called.
  0. `receivePhotoSet` is set as the success callback.

* `fetchPhotoSet`
  0. invoked from `PhotoIndex` `didMount`/`willReceiveProps`
  0. `GET /api/albums/[:id]/set/[:id]` is called.
  0. `receivePhotoSet` is set as the success callback.

* `updatePhotoSet`
  0. invoked from `PhotoSetForm` `onSubmit`
  0. `PATCH /api/albums/[:id]/set/[:id]` is called.
  0. `receivePhotoSet` is set as the success callback.

* `destroyPhotoSet`
  0. invoked from delete photoset button `onClick`
  0. `DELETE /api/albums/[:id]/set/[:id]` is called.
  0. `removePhotoSet` is set as the success callback.

### PhotoSets API Response Actions

* `receiveAllPhotoSets`
  0. invoked from an API callback
  0. the `PhotoSetReducer` updates `photoSets` in the application's state.

* `receivePhotoSet`
  0. invoked from an API callback
  0. the `PhotoSetReducer` updates `photoSets[id]` in the application's state.

* `removePhotoSet`
  0. invoked from an API callback
  0. the `PhotoSetReducer` removes `photoSets[id]` from the application's state.


## Photo Cycles

### Photos API Request Actions

* `fetchPhotosForSet`
  0. invoked from `PhotoSetIndex` `didMount`/`willReceiveProps`
  0. `GET /api/albums/[:id]/set/[:id]/photo` is called.
  0. `receiveAllPhotos` is set as the success callback.

* `addPhoto`
  0. invoked from new Photo button `onClick`
  0. `POST /api/albums/[:id]/set/[:id]/photo` is called.
  0. `receivePhoto` is set as the success callback.

* `updatePhoto`
  0. invoked from `PhotoForm` `onSubmit`
  0. `PATCH /api/albums/[:id]/set/[:id]/photo/[:id]` is called.
  0. `receivePhoto` is set as the success callback.

* `destroyPhoto`
  0. invoked from delete photo button `onClick`
  0. `DELETE /api/albums/[:id]/set/[:id]/photo/[:id]` is called.
  0. `removePhoto` is set as the success callback.

### Photos API Response Actions

* `receiveAllPhotos`
  0. invoked from an API callback
  0. the `PhotoReducer` updates `photos` in the application's state.

* `receivePhoto`
  0. invoked from an API callback
  0. the `PhotoReducer` updates `photos[id]` in the application's state.

* `removePhoto`
  0. invoked from an API callback
  0. the `PhotoReducer` removes `photos[id]` from the application's state.
