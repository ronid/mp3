import {find, findIndex} from 'lodash';

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
  const index = findIndex(state.songs.all, {id});
  return state.songs.all[(index + 1) % state.songs.all.length]
};


export const getPreviousSong = (state, id?) => {
  if (!id && !getActiveSong(state)) {
    return {};
  }
  id = id ? id : getActiveSong(state).id;
  let index = findIndex(state.songs.all, {id}) - 1;
  if (index < 0) {
    index = state.songs.all.length - 1;
  }
  return state.songs.all[index]
};

export const getAllSongs = state => state.songs.all;

export const getActiveSong = state => {
  const values = new URLSearchParams(state.router.location.search);
  return getSong(state, values.get('song'));
};
