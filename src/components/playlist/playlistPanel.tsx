import { Icon, Menu } from 'antd';
import { ClickParam } from 'antd/lib/menu';
import { push } from 'connected-react-router';
import { map } from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import * as Redux from 'redux';
import { addPlaylist } from '../../actionCreators';
import { getActivePlaylist, getAllPlaylist } from '../../reducers/playlist';
import { getAllSongs } from '../../reducers/songs';
import { AppState, PlaylistInstanceState, SongState } from '../../types/store';
import { Browser } from '../browser';
import { Row } from '../utils/style';
import { AddPlaylistModal } from './addPlaylistModal';


const PlaylistView = (props: PlaylistPanelProps) => {
  const {addPlaylist, currentPlaylist, allPlaylist, playlistOnClick, songs} = props;
  const [modalVisible, setModalVisibility] = React.useState(false);
  return (
    <Row>
      <Menu
        onClick={playlistOnClick}
        selectedKeys={[currentPlaylist.id]}
        mode='vertical'>
        {map(allPlaylist, (playlist: PlaylistInstanceState) => (
          <Menu.Item key={playlist.id}>{playlist.name}</Menu.Item>))}
        <Menu.Item
          key='newPlaylist'
          onClick={(_) => setModalVisibility(true)}>
          <Icon type='plus-circle'/> Add new..
        </Menu.Item>
      </Menu>
      <Browser songsIDs={currentPlaylist.songs || []}/>
      <AddPlaylistModal
        visible={modalVisible}
        handleCancel={(_) => setModalVisibility(false)}
        handleSubmit={(_) => setModalVisibility(false)}
        addPlaylist={addPlaylist}
        songs={songs}
      />
    </Row>
  )
};


interface StateProps {
  allPlaylist: PlaylistInstanceState[],
  currentPlaylist: PlaylistInstanceState,
  songs: SongState[],
}

interface DispatchProps {
  addPlaylist: (name: string, songs: string[]) => void,
  playlistOnClick: (event: ClickParam) => void,
}

type PlaylistPanelProps = StateProps & DispatchProps;

const mapStateToProps = (state: AppState): StateProps => ({
  allPlaylist: getAllPlaylist(state),
  currentPlaylist: getActivePlaylist(state) || {},
  songs: getAllSongs(state),
});


const mapDispatchToProps = (dispatch: Redux.Dispatch<any>): DispatchProps => ({
  addPlaylist: (name: string, songsIDs: string[]) => dispatch(addPlaylist(name, songsIDs)),
  playlistOnClick: (event: ClickParam) => dispatch(push(`/playlist/${event.key}`)),
});

export const PlaylistPanel = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(PlaylistView);
