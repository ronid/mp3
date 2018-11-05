import * as React from 'react';
import { Navbar } from '../navbar';
import { Player } from '../player';
import { PlaylistPanel } from '../playlist/playlistPanel';

export const PlaylistView = () =>
  (
    <div>
      <Navbar/>
      <div className='mp3-body'>
        <PlaylistPanel/>
        <Player/>
      </div>
    </div>
  )
