import * as React from 'react';
import { Route, Switch } from 'react-router';
import { HomePage } from './views/homePage';
import { PlaylistPage } from './views/playlistPage';

export const MP3 = () => (
  <Switch>
    <Route exact={true} path='/' render={() => <HomePage/>}/>
    <Route path='/playlist' render={() => <PlaylistPage/>}/>
    <Route path='/live' render={() => <HomePage/>}/>
  </Switch>
);
