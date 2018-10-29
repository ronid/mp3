import {Card, Icon} from 'antd';
import {push} from 'connected-react-router';
import * as React from 'react';
import {connect} from 'react-redux';
import {getActiveSong, getNextSong, getPreviousSong} from '../reducers/songs';

const {Meta} = Card;


export class PlayerView extends React.Component<{
  id: string,
  title: string,
  avatar: string,
  singer: string,
  songURL: string,
  playSong: (songID: string) => (dispatch: any) => void,
  playPrevious: (event: any) => void,
  nextSong: any,
  previousSong: any,
}> {

  public render() {
    return (
      <Card
        cover={<img src={this.props.avatar}/>}
        actions={[
          <Icon
            key={this.props.previousSong.id}
            onClick={this.props.playSong(this.props.previousSong.id)}
            type='step-backward'
          />,
          <Icon
            key={this.props.nextSong.id}
            onClick={this.props.playSong(this.props.nextSong.id)}
            type='step-forward'
          />
        ]}>
        <Meta title={this.props.title} description={this.props.singer}/>
        <audio className='audioPlayer' controls={true} key={this.props.id} autoPlay={false}>
          <source src={this.props.songURL} type='audio/mpeg'/>
        </audio>
      </Card>
    )
  }
}


const mapStateToProps = (state) => ({
  ...getActiveSong(state),
  nextSong: getNextSong(state),
  previousSong: getPreviousSong(state),
});


const mapDispatchToProps = (dispatch) => ({
  playSong: songID => (_) => {
    return dispatch(push(`?song=${songID}`))
  },
});

const Player = connect(mapStateToProps, mapDispatchToProps)(PlayerView);
export default Player;
