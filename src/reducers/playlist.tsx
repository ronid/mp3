import {find} from 'lodash';


const playlist = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PLAYLIST':
      return {...state, activePlaylist: [action.name]};
    default:
      return state
  }
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