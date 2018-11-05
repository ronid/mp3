import { RouterState } from 'connected-react-router';

export interface SongState {
  name: string,
  id: string,
}

export interface PlaylistInstanceState {
  name: string,
  id: string,
  songs: string[],
}

export interface ByIDState {
  [key:string]: SongState
}

export interface SongsState {
  byID: ByIDState
}

export interface PlaylistState {
  all: PlaylistInstanceState[],
}

export interface AppState {
  songs: SongsState,
  playlist: PlaylistState,
  router: RouterState
}