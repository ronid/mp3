import {Card, Icon} from 'antd';
import {push} from 'connected-react-router';
import * as React from 'react';
import {connect} from 'react-redux';
import {getActiveSong, getNextSongID, getPreviousSongID} from '../reducers/songs';

const {Meta} = Card;


export class PlayerView extends React.Component<{
  id: string,
  title: string,
  avatar: string,
  singer: string,
  songURL: string,
  playSong: (songID: string) => (dispatch: any) => void,
  playPrevious: (event: any) => void,
  nextSongID: any,
  previousSongID: any,
}> {

  public render() {
    return (
      <Card
        cover={<img src={this.props.avatar}/>}
        actions={[
          <Icon
            key={this.props.previousSongID}
            onClick={this.props.playSong(this.props.previousSongID)}
            type='step-backward'
          />,
          <Icon
            key={this.props.nextSongID}
            onClick={this.props.playSong(this.props.nextSongID)}
            type='step-forward'
          />
        ]}>
        <Meta title={this.props.title} description={this.props.singer}/>
        <audio className='audio-player' controls={true} key={this.props.id} autoPlay={false}>
          <source src={this.props.songURL} type='audio/mpeg'/>
        </audio>
      </Card>
    )
  }
}


const mapStateToProps = (state) => ({
  ...getActiveSong(state),
  nextSongID: getNextSongID(state),
  previousSongID: getPreviousSongID(state),
});


const mapDispatchToProps = (dispatch) => ({
  playSong: songID => (_) => {
    return dispatch(push(`?song=${songID}`))
  },
});

const Player = connect(mapStateToProps, mapDispatchToProps)(PlayerView);
export default Player;
