import {List} from 'antd';
import {push} from 'connected-react-router';
import * as React from 'react';
import {connect} from 'react-redux';
import {getActiveSong, getAllSongs} from '../reducers/songs';
import {Song} from './song';

class BrowserView extends React.Component<{ activeSong: any, songs: [], setSong: any }> {
  public renderSong = (song) => (<Song
    id={song.id}
    title={song.name}
    avatar={song.avatar}
    isActive={this.props.activeSong && song.id === this.props.activeSong.id}
    singer={song.singer}
    playAction={this.props.setSong}
  />);

  public render() {
    return <List itemLayout='horizontal' dataSource={this.props.songs} renderItem={this.renderSong}/>
  }
}

const mapStateToProps = (state, ownProps) => ({
  activeSong: getActiveSong(state),
  songs: ownProps.songs ? ownProps.songs : getAllSongs(state),
});


const mapDispatchToProps = dispatch => ({
  setSong: (songID) => dispatch(push(`?song=${songID}`))

});


const Browser = connect(mapStateToProps, mapDispatchToProps)(BrowserView);
export default Browser;

