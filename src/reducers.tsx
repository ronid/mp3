import {combineReducers} from "redux";


const activeRoute = (state = 'live', action) => {
  switch (action.type) {
    case 'SET_ROUTE':
      return action.target;
    default:
      return state
  }
};


const activeSong = (state = 0, action) => {
  switch (action.type) {
    case 'SET_SONG':
      return action.songID;
    default:
      return state
  }
};

const playlist = (state = [], action) => {
  return state
};

const songs = (state = [], action) => {
  return state
};

export const mp3 = combineReducers({
  activeRoute,
  activeSong,
  playlist,
  songs,
});