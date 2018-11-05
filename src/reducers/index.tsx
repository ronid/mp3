import { combineReducers } from 'redux';
import { playlist } from './playlist';
import { songs } from './songs';


export const mp3 = combineReducers({
  playlist,
  songs,
});