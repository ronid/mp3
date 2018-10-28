import {find} from 'lodash';


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

export default songs;

export const getSong = (state, id) => find(state.songs.all, {id});

export const getAllSongs = state => state.songs.all;

export const getActiveSong = state => state.songs.activeSong;
