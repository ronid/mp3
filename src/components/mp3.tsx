import {Icon, Menu} from 'antd';
import {ClickParam} from 'antd/es/menu';
import * as React from 'react';
import Browser from './browser'
import Player from './player';
import Playlist from './playlist';

export class MP3 extends React.Component {
  public state = {
    activeRoute: 'live',
  };

  public changeRoute = (e: ClickParam) => {
    this.setState({activeRoute: e.key})
  };

  public renderContent = () => {
    if (this.state.activeRoute === 'live') {


      return (
        <div className='mp3-body'>
          <div className='browser'>
            <Browser/>
          </div>
          <div className='player'>
            <Player/>
          </div>
        </div>
      )

    } else if (this.state.activeRoute === 'playlist') {
      return <Playlist/>

    } else {
      return <div>Invalid URL</div>
    }
  };

  public render() {
    return (
      <div>
        <Menu onClick={this.changeRoute} selectedKeys={[this.state.activeRoute]} mode='horizontal'>
          <Menu.Item key='live'>
            <Icon type='home'/>Live
          </Menu.Item>
          <Menu.Item key='playlist'>
            <Icon type='bars'/>Playlists
          </Menu.Item>
        </Menu>
        {this.renderContent()}
      </div>
    )
  }
}
