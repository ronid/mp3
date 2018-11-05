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


const PlaylistView = ({
                        activeSong,
                        addPlaylist,
                        currentPlaylist,
                        allPlaylist,
                        setSong,
                        setPlaylist,
                        songs,
                      }) => {
  const [modalVisible, setModalVisibility] = React.useState(false);
  return (
    <Row>
      <Menu
        onClick={setPlaylist}
        selectedKeys={[currentPlaylist.id]}
        mode='vertical'>
          {map(allPlaylist, playlist => (<Menu.Item key={playlist.id}>{playlist.name}</Menu.Item>))}
        <Menu.Item
          key='newPlaylist'
          onClick={(_) => setModalVisibility(true)}>
          <Icon type='plus-circle'/> Add new..
        </Menu.Item>
      </Menu>
      <Browser songs={currentPlaylist.songs || []}/>
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
