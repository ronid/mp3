import { find } from 'lodash';
import { combineReducers, Reducer } from 'redux';
import * as UrlPattern from 'url-pattern';
import { RootAction } from '../actions';
import * as action_types from '../actions/actionTypes';
import { AppState, PlaylistInstanceState, PlaylistState } from '../types/store';


const PLAYLIST_PATTERN = new UrlPattern('/playlist/(:playlistID)(.*)');


const all: Reducer<PlaylistInstanceState[], RootAction> = (state = [], action) => {
  switch (action.type) {
    case action_types.NEW_PLAYLIST:
      return state.concat(action.payload.playlist);
    default:
      return state;
  }
};


export const playlist = combineReducers<PlaylistState, RootAction>({
  all,
});


export const getActivePlaylist = (state: AppState) => {
  const match = PLAYLIST_PATTERN.match(state.router.location.pathname);
  if (!match) {
    return undefined;
  }
  return getPlaylist(state, match.playlistID);
};

export const getPlaylist = (state: AppState, id: string) => find(state.playlist.all, {id});

export const getAllPlaylist = (state: AppState) => state.playlist.all;