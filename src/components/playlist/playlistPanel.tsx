import { Icon, Menu } from 'antd';
import { push } from 'connected-react-router';
import { map } from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import { addPlaylist } from '../../actionCreators';
import { getActivePlaylist, getAllPlaylist } from '../../reducers/playlist';
import { getActiveSong, getAllSongs } from '../../reducers/songs';
import { Browser } from '../browser';
import { Row } from '../utils/style';
import { AddPlaylistModal } from './addPlaylistModal';


class PlaylistView extends React.Component<{
  activeSong: number,
  addPlaylist: (name, songs) => void,
  currentPlaylist: { songs: [], name: string, id: string },
  allPlaylist: [],
  setSong: (songID: number) => void,
  setPlaylist: (event: any) => void,
  songs: [],
}> {

  state = {
    modalVisible: false,
  };

  public renderPlaylist = playlist => (
    <Menu.Item key={playlist.id}>
      {playlist.name}
    </Menu.Item>
  );

  public render() {
    return (
      <Row>
        <Menu
          onClick={this.props.setPlaylist}
          selectedKeys={[this.props.currentPlaylist.id]}
          mode='vertical'>
          {map(this.props.allPlaylist, this.renderPlaylist)}
          <Menu.Item
            key='newPlaylist'
            onClick={(_) => {
              this.setState({modalVisible: !this.state.modalVisible})
            }}>
            <Icon type='plus-circle'/> Add new..
          </Menu.Item>
        </Menu>
        <Browser songs={this.props.currentPlaylist.songs || []}/>
        <AddPlaylistModal
          visible={this.state.modalVisible}
          handleCancel={(_) => this.setState({modalVisible: false})}
          handleSubmit={(_) => this.setState({modalVisible: false})}
          addPlaylist={this.props.addPlaylist}
          songs={this.props.songs}
        />
      </Row>
    )
  }
}

const mapStateToProps = state => ({
  activeSong: getActiveSong(state),
  allPlaylist: getAllPlaylist(state),
  currentPlaylist: getActivePlaylist(state) || {},
  songs: getAllSongs(state),
});


const mapDispatchToProps = dispatch => ({
  addPlaylist: (name, songsIDs) => dispatch(addPlaylist(name, songsIDs)),
  setPlaylist: ({key}) => dispatch(push(`/playlist/${key}`)),
  setSong: songID => dispatch(push(`song=${songID}`))
});

export const PlaylistPanel = connect(mapStateToProps, mapDispatchToProps)(PlaylistView);
