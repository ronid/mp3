import { v4 } from 'node-uuid';

export const addPlaylist = (name: string, songs: string[]) => {
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