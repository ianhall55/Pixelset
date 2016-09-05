import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import AlbumsMiddleware from './albums_middleware';
import PhotoSetsMiddleware from './photo_sets_middleware';
import PhotosMiddleware from './photos_middleware';


const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  AlbumsMiddleware,
  PhotoSetsMiddleware,
  PhotosMiddleware
);

export default RootMiddleware;
