import * as React from 'react';
import {Route, Switch} from 'react-router';
import {HomeView} from './views/homePage';
import {PlaylistView} from './views/playlistPage';

export class MP3 extends React.Component {

  public render() {
    return (
      <Switch>
        <Route exact={true} path='/' render={() => <PlaylistView/>}/>
        <Route path='/playlist' render={() => <PlaylistView/>}/>
        <Route path='/live' render={() => <HomeView/>}/>
      </Switch>
    )
  }
}
