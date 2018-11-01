import {find} from 'lodash';
import * as UrlPattern from 'url-pattern';

const PLAYLIST_PATTERN = new UrlPattern('/playlist/(:playlistID)(.*)')

const playlist = (state = {all: []}, action) => {
  if (action.type === 'NEW_PLAYLIST') {
    let newPlaylist = state.all;
    newPlaylist = newPlaylist.concat(action.playlist);
    return {...state, all: newPlaylist}
  }
  return state;
};

export default playlist;

export const getActivePlaylist = state => {
  debugger;
  const match = PLAYLIST_PATTERN.match(state.router.location.pathname);
  if (!match) {
    return undefined;
  }
  return getPlaylist(state, match.playlistID);
};

export const getPlaylist = (state, id) => find(state.playlist.all, {id});

export const getAllPlaylist = state => state.playlist.all;