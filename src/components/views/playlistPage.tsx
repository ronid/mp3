import * as React from 'react';
import { Navbar } from '../navbar';
import { Player } from '../player';
import { PlaylistPanel } from '../playlist/playlistPanel';
import { Row } from '../utils/style';

export const PlaylistView = () =>
  (
    <div>
      <Navbar/>
      <Row>
        <PlaylistPanel/>
        <Player/>
      </Row>
    </div>
  );
