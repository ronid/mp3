import { Card, Icon } from 'antd';
import { push } from 'connected-react-router';
import * as React from 'react';
import { connect } from 'react-redux';
import { getActiveSong, getNextSongID, getPreviousSongID } from '../reducers/songs';

const CardMeta = Card.Meta;


export class PlayerView extends React.Component<{
  id: string,
  name: string,
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
          <a key={this.props.previousSongID}>
            <Icon
              onClick={this.props.playSong(this.props.previousSongID)}
              type='step-backward'
            />
          </a>,
          <a key={this.props.nextSongID}>
            <Icon
              onClick={this.props.playSong(this.props.nextSongID)}
              type='step-forward'
            />
          </a>
        ]}>
        <CardMeta title={this.props.name} description={this.props.singer}/>
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

export const Player = connect(mapStateToProps, mapDispatchToProps)(PlayerView);
