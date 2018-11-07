import { RouterAction } from 'connected-react-router';
import { ActionType } from 'typesafe-actions';
import * as playlist from './playlist';

export type AddPlaylistAction = ActionType<typeof playlist>;
export type RootAction =
  AddPlaylistAction |
  RouterAction;