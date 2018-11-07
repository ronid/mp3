import { RouterAction } from 'connected-react-router';
import { v4 } from 'node-uuid';
import { action, ActionType } from 'typesafe-actions';

export const addPlaylist = (name: string, songs: string[]) => {
  const id = v4();
  return action('NEW_PLAYLIST',
    {
      playlist: {
        id,
        name,
        songs,
      }
    }
  )
};

export type AddPlaylistAction = ActionType<typeof addPlaylist>;
export type RootAction =
  AddPlaylistAction |
  RouterAction;