import * as React from 'react';
import Navbar from '../navbar';
import Player from '../player';
import Playlist from '../playlist/playlistPanel';

export class PlaylistView extends React.Component {
  public render() {
    return (
      <div>
        <Navbar/>
        <div className='mp3-body'>
          <Playlist/>
          <Player/>
        </div>
      </div>
    )
  }
}
