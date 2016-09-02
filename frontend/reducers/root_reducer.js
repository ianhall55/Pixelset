import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import AlbumsReducer from './albums_reducer';
import FormsReducer from './forms_reducer';
import PhotoSetsReducer from './photo_sets_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  albums: AlbumsReducer,
  forms: FormsReducer,
  photoSets: PhotoSetsReducer
});

export default RootReducer;
