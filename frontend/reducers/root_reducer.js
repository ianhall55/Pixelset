import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import AlbumsReducer from './albums_reducer';
import FormsReducer from './forms_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  albums: AlbumsReducer,
  forms: FormsReducer
});

export default RootReducer;
