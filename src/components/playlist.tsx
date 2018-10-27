import {Icon, List, Menu} from 'antd';
import {map} from 'lodash';
import * as React from 'react';
import {connect} from 'react-redux';
import {setPlaylist} from "../actions";
import {getActivePlaylist, getActiveSong, getPlaylist} from "../reducers";
import {Song} from "./song";


class PlaylistView extends React.Component<{
  currentPlaylist: { songs: [], name: [string] },
  activeSong: number,
  playlist: [],
  setSong: (songID: number) => void,
  setPlaylist: (event: any) => void,
}> {

  public renderSong = (song) => (<Song
    id={song.id}
    title={song.name}
    avatar={song.avatar}
    isActive={song.id === this.props.activeSong}
    singer={song.singer}
    playAction={this.props.setSong}
  />);

  public renderPlayList = (playlist) => <Menu.Item key={playlist.name}><Icon type='plus-circle'/>{playlist.name}</Menu.Item>

  public render() {
    return (
      <div className='mp3-body'>
        <Menu
          onClick={this.props.setPlaylist}
          selectedKeys={this.props.currentPlaylist.name}
          mode="vertical">
          {map(this.props.playlist, this.renderPlayList)}
        </Menu>
        <List
          className='playlist'
          itemLayout='horizontal'
          dataSource={this.props.currentPlaylist.songs}
          renderItem={this.renderSong}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  activeSong: getActiveSong(state),
  currentPlaylist: getActivePlaylist(state),
  playlist: getPlaylist(state)
});


const mapDispatchToProps = dispatch => ({
  setPlaylist: (event) => {
    dispatch(setPlaylist(event.key))
  }
});

const Player = connect(mapStateToProps, mapDispatchToProps)(PlaylistView);
export default Player;