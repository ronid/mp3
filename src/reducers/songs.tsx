import { indexOf, keys, values } from 'lodash';
import { combineReducers, Reducer } from 'redux';
import { RootAction } from '../actions';
import { AppState, ByIDState, SongsState, SongState } from '../types/store';
import { getActivePlaylist } from './playlist';


const byID: Reducer<ByIDState, RootAction> = (state = {}, action) => {
  return state
};

export const songs = combineReducers<SongsState, RootAction>({
  byID,
});


export const getSong = (state: AppState, id: string) => state.songs.byID[id];

export const getNextSongID = (state: AppState, id?: string) => {
  id = id ? id : getActiveSongID(state);
  if (!id) {
    return undefined;
  }
  const songs = getSongsByState(state);
  return songs[(indexOf(songs, id) + 1) % songs.length]
};


export const getPreviousSongID = (state: AppState, id?: string) => {
  id = id ? id : getActiveSongID(state);
  if (!id) {
    return null;
  }

  const songs = getSongsByState(state);
  let index = indexOf(songs, id) - 1;
  if (index < 0) {
    index = songs.length - 1;
  }
  return songs[index]
};


const getActiveSongID = (state: AppState) => {
  const activeSong = getActiveSong(state);
  if (activeSong) {
    return activeSong.id;
  }
  return undefined;
};

const getSongsByState = (state: AppState) => {
  const activePlaylist = getActivePlaylist(state);
  return activePlaylist ? activePlaylist.songs : keys(state.songs.byID);
};


export const getAllSongs = (state: AppState) => values(state.songs.byID);

export const getAllSongsIDS = (state: AppState) => keys(state.songs.byID);

export const getActiveSong = (state: AppState): SongState | undefined => {
  const values = new URLSearchParams(state.router.location.search);
  const activeSong = values.get('song');
  if (!activeSong) {
    return undefined
  }
  return getSong(state, activeSong);
};
