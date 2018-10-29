import {find} from 'lodash';


const playlist = (state = {}, action) => {
  return state;
};

export default playlist;

export const getActivePlaylist = state => {
  const regexp = /playlist\/(\S+)/;
  const idFromURL = regexp.exec(state.router.location.pathname);
  if (!idFromURL) {
    return undefined;
  }
  const playlistID = idFromURL[1];
  return getPlaylist(state, playlistID);
};

export const getPlaylist = (state, id) => find(state.playlist.all, {id});

export const getAllPlaylist = state => state.playlist.all;