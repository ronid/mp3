import * as React from 'react';
import Browser from '../browser';
import Navbar from '../navbar';
import Player from '../player';

export class HomeView extends React.Component {
  public render() {
    return (
      <div>
        <Navbar/>
        <div className='mp3-body'>
          <div className='browser'>
            <Browser/>
          </div>
          <div className='player'>
            <Player/>
          </div>
        </div>
      </div>
    )
  }
}
