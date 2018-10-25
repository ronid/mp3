import {List} from 'antd';
import * as React from 'react';
import {connect} from 'react-redux';
import {Song} from "./song";

class BrowserRender extends React.Component<{ activeSong: number, songs: [], setSong: any }> {
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
  activeSong: state.activeSong,
  songs: state.songs,
});


const mapDispatchToProps = dispatch => ({
  setSong: (songID) => dispatch(
    {
      songID,
      type: 'SET_SONG',
    }
  )
});


const Browser = connect(mapStateToProps, mapDispatchToProps)(BrowserRender);
export default Browser;

