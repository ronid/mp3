import { find } from 'lodash';
import * as UrlPattern from 'url-pattern';
import { AppState } from '../types/store';

const PLAYLIST_PATTERN = new UrlPattern('/playlist/(:playlistID)(.*)');

export const playlist = (state = {all: []}, action) => {
  if (action.type === 'NEW_PLAYLIST') {
    let newPlaylist = state.all;
    newPlaylist = newPlaylist.concat(action.payload.playlist);
    return {...state, all: newPlaylist}
  }
  return state;
};


export const getActivePlaylist = (state: AppState) => {
  const match = PLAYLIST_PATTERN.match(state.router.location.pathname);
  if (!match) {
    return undefined;
  }
  return getPlaylist(state, match.playlistID);
};

export const getPlaylist = (state: AppState, id: string) => find(state.playlist.all, {id});

export const getAllPlaylist = (state: AppState) => state.playlist.all;