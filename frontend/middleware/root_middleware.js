import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import AlbumsMiddleware from './albums_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  AlbumsMiddleware
);

export default RootMiddleware;
