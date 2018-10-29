import {Icon, Menu} from 'antd';
import {push} from 'connected-react-router';
import {map} from 'lodash';
import * as React from 'react';
import {connect} from 'react-redux';
import {getActivePlaylist, getAllPlaylist} from '../reducers/playlist';
import {getActiveSong} from '../reducers/songs';
import Browser from './browser';


class PlaylistView extends React.Component<{
  currentPlaylist: { songs: [], name: [string] },
  activeSong: number,
  playlist: [],
  setSong: (songID: number) => void,
  setPlaylist: (event: any) => void,
}> {

  public renderPlayList = playlist => (
    <Menu.Item key={playlist.id}>
      <Icon type='plus-circle'/>{playlist.name}
      </Menu.Item>
  )

  public render() {
    return (
      <div className='mp3-body'>
        <Menu
          onClick={this.props.setPlaylist}
          selectedKeys={this.props.currentPlaylist.name}
          mode='vertical'>
          {map(this.props.playlist, this.renderPlayList)}
        </Menu>
        <div className='browser'>
          <Browser songs={this.props.currentPlaylist.songs || []}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  activeSong: getActiveSong(state),
  currentPlaylist: getActivePlaylist(state) || {},
  playlist: getAllPlaylist(state)
});


const mapDispatchToProps = dispatch => ({
  setPlaylist: ({key}) => dispatch(push(`/playlist/${key}`)),
  setSong: songID => dispatch(push(`song=${songID}`))
});

const Player = connect(mapStateToProps, mapDispatchToProps)(PlaylistView);
export default Player;