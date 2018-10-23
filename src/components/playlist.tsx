import {Icon, List, Menu} from 'antd';
import {ClickParam} from "antd/es/menu";
import {find, map} from 'lodash';
import * as React from 'react';


export class Playlist extends React.Component<{ playlist: object, renderSong: (song: object) => any }> {
  public state = {
    chosenPlaylist: this.props.playlist[0].name
  };

  public renderSong = (playlist) => <Menu.Item key={playlist.name}><Icon type='plus-circle'/>{playlist.name}</Menu.Item>

  public renderMenuItems = () => map(this.props.playlist, this.renderSong);

  public choosePlaylist = (e: ClickParam) => {
    this.setState({chosenPlaylist: e.key})
  };


  public render() {
    const currentPlaylist = find(this.props.playlist, {name: this.state.chosenPlaylist});

    return (
      <div className='mp3-body'>
        <Menu onClick={this.choosePlaylist} selectedKeys={[this.state.chosenPlaylist]} mode="vertical">
          {this.renderMenuItems()}
        </Menu>
        <List className='playlist' itemLayout='horizontal' dataSource={currentPlaylist.songs} renderItem={this.props.renderSong}/>
      </div>
    )
  }
}
