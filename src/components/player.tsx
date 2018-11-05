import { Card } from 'antd';
import { push } from 'connected-react-router';
import * as React from 'react';
import { connect } from 'react-redux';
import { default as styled } from 'styled-components';
import { getActiveSong, getNextSongID, getPreviousSongID } from '../reducers/songs';
import { ClickableIcon } from './utils/style';

const CardMeta = Card.Meta;


export const SongCover = styled.img`
  height: 600px;
  object-fit: cover;
  width: 750px;
`;


export const AudioPlayer = styled.audio`
  margin-top: 25px;
  width: 100%;
`;

export const PlayerBody = styled(Card)`
  margin: auto;
`;

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
      <PlayerBody
        cover={<SongCover src={this.props.avatar}/>}
        actions={[
          <ClickableIcon
            key={this.props.previousSongID}
            onClick={this.props.playSong(this.props.previousSongID)}
            type='step-backward'
          />,
          <ClickableIcon
            key={this.props.nextSongID}
            onClick={this.props.playSong(this.props.nextSongID)}
            type='step-forward'
          />,
        ]}>
        <CardMeta title={this.props.name} description={this.props.singer}/>
        <AudioPlayer controls={true} key={this.props.id} autoPlay={false}>
          <source src={this.props.songURL} type='audio/mpeg'/>
        </AudioPlayer>
      </PlayerBody>
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
