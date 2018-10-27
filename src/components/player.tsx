import {Card, Icon} from 'antd';
import * as React from 'react';
import {connect} from 'react-redux';
import {playNext, playPrevious} from '../actions';
import {getActiveSong, getSong} from '../reducers';

const {Meta} = Card;


export class PlayerView extends React.Component<{
  activeSong: number,
  title: string,
  avatar: string,
  singer: string,
  songURL: string,
  playNext: (currentSong: number) => void,
  playPrevious: (currentSong: number) => void,
}> {

  public nextSong = (event: React.MouseEvent) => {
    event.preventDefault();
    this.props.playNext(this.props.activeSong);
  };


  public prevSong = (event: React.MouseEvent) => {
    event.preventDefault();
    this.props.playPrevious(this.props.activeSong);
  };

  public render() {
    return (
      <Card
        cover={<img src={this.props.avatar}/>}
        actions={[
          <Icon key={1} onClick={this.prevSong} type='step-backward'/>,
          <Icon key={3} onClick={this.nextSong} type='step-forward'/>]}>
        <Meta title={this.props.title} description={this.props.singer}/>
        <audio className='audioPlayer' controls={true} key={this.props.activeSong} autoPlay={false}>
          <source src={this.props.songURL} type='audio/mpeg'/>
        </audio>
      </Card>
    )
  }
}


const mapStateToProps = state => ({
  activeSong: getActiveSong(state),
  ...getSong(state, state.songs.activeSong),
});


const mapDispatchToProps = dispatch => ({
  playNext: (songID) => dispatch(playNext(songID)),
  playPrevious: (songID) => dispatch(playPrevious(songID)),
});

const Player = connect(mapStateToProps, mapDispatchToProps)(PlayerView);
export default Player


;
