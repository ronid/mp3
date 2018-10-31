import {List} from 'antd';
import {push} from 'connected-react-router';
import * as React from 'react';
import {connect} from 'react-redux';
import {getActiveSong, getAllSongsIDS} from '../reducers/songs';
import Song from './song';

class BrowserView extends React.Component<{ activeSong: any, songs: [], setSong: any }> {
  public renderSong = (songID) => (<Song
    id={songID}
    isActive={this.props.activeSong && songID === this.props.activeSong.id}
    playAction={this.props.setSong}
  />);

  public render() {
    return <List itemLayout='horizontal' dataSource={this.props.songs} renderItem={this.renderSong}/>
  }
}

const mapStateToProps = (state, ownProps) => ({
  activeSong: getActiveSong(state),
  songs: ownProps.songs ? ownProps.songs : getAllSongsIDS(state),
});


const mapDispatchToProps = dispatch => ({
  setSong: songID => _ => dispatch(push(`?song=${songID}`))

});


const Browser = connect(mapStateToProps, mapDispatchToProps)(BrowserView);
export default Browser;

