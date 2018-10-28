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
  const name = state.playlist.activePlaylist;
  if (!name) {
    return {name, songs: []}
  }

  const currPlaylist = find(state.playlist.all, {name: name[0]});
  return {name, songs: currPlaylist.songs}
};

export const getPlaylist = state => state.playlist.all;