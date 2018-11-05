import { v4 } from 'node-uuid';

export const addPlaylist = (name: string, songs: []) => {
  const id = v4();
  return {
    playlist: {
      id,
      name,
      songs,
    },
    type: 'NEW_PLAYLIST',
  }
};