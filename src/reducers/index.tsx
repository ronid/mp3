import { combineReducers } from 'redux';
import { playlist } from './playlist';
import { songs } from './songs';


export const rootReducer = combineReducers({
  playlist,
  songs,
});