import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import AlbumsReducer from './albums_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  albums: AlbumsReducer
});

export default RootReducer;
