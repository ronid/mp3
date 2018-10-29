import {find, findIndex} from 'lodash';
import {getActivePlaylist} from './playlist';

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

export const getNextSong = (state, id?) => {
  if (!id && !getActiveSong(state)) {
    return {};
  }
  id = id ? id : getActiveSong(state).id;

  const activePlaylist = getActivePlaylist(state);
  const songs = activePlaylist ? activePlaylist.songs : state.songs.all;
  const index = findIndex(songs, {id});
  return songs[(index + 1) % songs.length]
};


export const getPreviousSong = (state, id?) => {
  if (!id && !getActiveSong(state)) {
    return {};
  }
  id = id ? id : getActiveSong(state).id;

  const activePlaylist = getActivePlaylist(state);
  const songs = activePlaylist ? activePlaylist.songs : state.songs.all;
  let index = findIndex(songs, {id}) - 1;
  if (index < 0) {
    index = songs.length - 1;
  }
  return songs[index]
};

export const getAllSongs = state => state.songs.all;

export const getActiveSong = state => {
  const values = new URLSearchParams(state.router.location.search);
  return getSong(state, values.get('song'));
};
