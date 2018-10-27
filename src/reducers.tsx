import {find} from 'lodash';
import {combineReducers} from "redux";


const activeRoute = (state = 'live', action) => {
  switch (action.type) {
    case 'SET_ROUTE':
      return action.target;
    default:
      return state
  }
};


const playlist = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PLAYLIST':
      return {...state, activePlaylist: [action.name]};
    default:
      return state
  }
};

export const getActivePlaylist = state => {
  const name = state.playlist.activePlaylist;
  if (!name) {
    return {name, songs: []}
  }
  
  const currPlaylist = find(state.playlist.all, {name: name[0]});
  return {name, songs: currPlaylist.songs}
};

export const getPlaylist = state => state.playlist.all;

const songs = (state = {all: [], activeSong: 0}, action) => {
  switch (action.type) {
    case 'SET_SONG':
      return {...state, activeSong: action.songID};
    case 'PLAY_NEXT':
      return {...state, activeSong: (action.songID + 1) % state.all.length};
    case 'PLAY_PREVIOUS':
      let previousSong = action.songID - 1;
      if (previousSong === 0) {
        previousSong = state.all.length - 1;
      }
      return {...state, activeSong: previousSong};
    default:
      return state
  }
};

export const getSong = (state, id) => {
  return find(state.songs.all, {id});
};

export const getAllSongs = state => {
  return state.songs.all;
};


export const getActiveSong = state => state.songs.activeSong;


export const mp3 = combineReducers({
  activeRoute,
  playlist,
  songs,
});