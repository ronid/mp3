import * as React from 'react';
import Navbar from '../navbar';
import Playlist from '../playlist';

export class PlaylistView extends React.Component {
  public render() {
    return (
      <div>
        <Navbar/>
        <Playlist/>
      </div>
    )
  }
}
