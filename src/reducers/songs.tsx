import {indexOf, keys, values} from 'lodash';
import {getActivePlaylist} from './playlist';

const songs = (state = {all: []}, action) => {
  return state
};

export default songs;

export const getSong = (state, id) => state.songs.byID[id];


const chooseCurrentID = (state, id) => {
  if (!id && !getActiveSong(state)) {
    return null;
  }
   return id || getActiveSong(state).id;

};

const getSongsByState = (state) => {
  const activePlaylist = getActivePlaylist(state);
  return activePlaylist ? activePlaylist.songs : keys(state.songs.byID);
};

export const getNextSongID = (state, id?) => {
  id = chooseCurrentID(state, id);
  if (!id) {
    return null;
  }

  const songs =  getSongsByState(state);
  return songs[(indexOf(songs, id) + 1) % songs.length]
};


export const getPreviousSongID = (state, id?) => {
  id = chooseCurrentID(state, id);
  if (!id) {
    return null;
  }

  const songs =  getSongsByState(state);
  let index = indexOf(songs, id) - 1;
  if (index < 0) {
    index = songs.length - 1;
  }
  return songs[index]
};

export const getAllSongs = state => values(state.songs.byID);

export const getAllSongsIDS = state => keys(state.songs.byID);

export const getActiveSong = state => {
  const values = new URLSearchParams(state.router.location.search);
  const activeSong = values.get('song');
  if (!activeSong) {
    return {}
  }
  return getSong(state, activeSong);
};
