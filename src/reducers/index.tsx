import {combineReducers} from 'redux';
import playlist from './playlist';
import songs from './songs';


const activeRoute = (state = 'live', action) => {
  switch (action.type) {
    case 'SET_ROUTE':
      return action.target;
    default:
      return state
  }
};


export const mp3 = combineReducers({
  activeRoute,
  playlist,
  songs,
});