import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import AlbumsReducer from './albums_reducer';
import FormsReducer from './forms_reducer';
import PhotoSetsReducer from './photo_sets_reducer';
import PhotoSetDetailReducer from './photo_set_detail_reducer.js';

const RootReducer = combineReducers({
  session: SessionReducer,
  albums: AlbumsReducer,
  forms: FormsReducer,
  photoSets: PhotoSetsReducer,
  photoSetDetail: PhotoSetDetailReducer
});

export default RootReducer;
