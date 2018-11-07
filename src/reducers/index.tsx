import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { RootAction } from '../actions';
import { AppState } from '../types/store';
import { playlist } from './playlist';
import { songs } from './songs';


export const createRootReducer = (history: History) => combineReducers<AppState, RootAction>({
  playlist,
  router: connectRouter(history),
  songs,
});