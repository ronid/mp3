import {List} from 'antd';
import * as React from 'react';
import {connect} from 'react-redux';
import {playSong} from '../actions';
import {getActiveSong, getAllSongs} from '../reducers/songs';
import {Song} from './song';

class BrowserView extends React.Component<{ activeSong: number, songs: [], setSong: any }> {
  public renderSong = (song) => (<Song
    id={song.id}
    title={song.name}
    avatar={song.avatar}
    isActive={song.id === this.props.activeSong}
    singer={song.singer}
    playAction={this.props.setSong}
  />);

  public render() {
    return <List itemLayout='horizontal' dataSource={this.props.songs} renderItem={this.renderSong}/>
  }
}

const mapStateToProps = state => ({
  activeSong: getActiveSong(state),
  songs: getAllSongs(state),
});


const mapDispatchToProps = dispatch => ({
  setSong: (songID) => dispatch(playSong(songID))

});


const Browser = connect(mapStateToProps, mapDispatchToProps)(BrowserView);
export default Browser;

