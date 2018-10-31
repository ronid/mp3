import {Icon, Menu} from 'antd';
import {push} from 'connected-react-router';
import {map} from 'lodash';
import * as React from 'react';
import {connect} from 'react-redux';
import {addPlaylist} from '../../actionCreators';
import {getActivePlaylist, getAllPlaylist} from '../../reducers/playlist';
import {getActiveSong, getAllSongs} from '../../reducers/songs';
import Browser from '../browser';
import AddPlaylistModal from './addPlaylistModal';


class PlaylistView extends React.Component<{
  addPlaylist: (name, songs) => void,
  currentPlaylist: { songs: [], name: string, id: string },
  activeSong: number,
  playlist: [],
  setSong: (songID: number) => void,
  setPlaylist: (event: any) => void,
  songs: [],
}> {

  state = {
    modalVisible: false,
  };

  public renderPlayList = playlist => (
    <Menu.Item key={playlist.id}>
      {playlist.name}
    </Menu.Item>
  );

  public render() {
    return (
      <div className='mp3-body'>
        <Menu
          onClick={this.props.setPlaylist}
          selectedKeys={[this.props.currentPlaylist.id]}
          mode='vertical'>
          {map(this.props.playlist, this.renderPlayList)}
          <Menu.Item onClick={(_) => {
            this.setState({modalVisible: !this.state.modalVisible})
          }}>
            <Icon type='plus-circle'/> Add new..
          </Menu.Item>
        </Menu>
        <div className='browser'>
          <Browser songs={this.props.currentPlaylist.songs || []}/>
        </div>
        <AddPlaylistModal
          visible={this.state.modalVisible}
          handleCancel={(_) => this.setState({modalVisible: false})}
          handleSubmit={(_) => this.setState({modalVisible: false})}
          addPlaylist={this.props.addPlaylist}
          songs={this.props.songs}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  activeSong: getActiveSong(state),
  currentPlaylist: getActivePlaylist(state) || {},
  playlist: getAllPlaylist(state),
  songs: getAllSongs(state),
});


const mapDispatchToProps = dispatch => ({
  addPlaylist: (name, songs) => dispatch(addPlaylist(name, songs)),
  setPlaylist: ({key}) => dispatch(push(`/playlist/${key}`)),
  setSong: songID => dispatch(push(`song=${songID}`))
});

const Player = connect(mapStateToProps, mapDispatchToProps)(PlaylistView);
export default Player;