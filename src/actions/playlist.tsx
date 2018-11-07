import { v4 } from 'node-uuid';
import { action } from 'typesafe-actions';
import * as action_types from './actionTypes';

export const addPlaylist = (name: string, songs: string[]) => (
  action(action_types.NEW_PLAYLIST,
    {
      playlist: {
        id: v4(),
        name,
        songs,
      }
    }
  )
);

