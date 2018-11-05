import * as React from 'react';
import { Route, Switch } from 'react-router';
import { HomeView } from './views/homePage';
import { PlaylistView } from './views/playlistPage';

export const MP3 = () => (
  <Switch>
    <Route exact={true} path='/' render={() => <HomeView/>}/>
    <Route path='/playlist' render={() => <PlaylistView/>}/>
    <Route path='/live' render={() => <HomeView/>}/>
  </Switch>
);
