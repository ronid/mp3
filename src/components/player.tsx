import { Card } from 'antd';
import { ClickParam } from 'antd/lib/menu';
import { push } from 'connected-react-router';
import * as React from 'react';
import { connect } from 'react-redux';
import * as Redux from 'redux';
import { default as styled } from 'styled-components';
import { getActiveSong, getNextSongID, getPreviousSongID } from '../reducers/songs';
import { AppState } from '../types/store';
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

const PlayerView = (props: PlayerViewProps) => {
  const {id, avatar, name, songURL, singer, previousSongID, nextSongID, playSong} = props;
    return (
      <PlayerBody
        cover={<SongCover src={avatar}/>}
        actions={[
          <ClickableIcon
            key={previousSongID}
            onClick={playSong(previousSongID)}
            type='step-backward'
          />,
          <ClickableIcon
            key={nextSongID}
            onClick={playSong(nextSongID)}
            type='step-forward'
          />,
        ]}>
        <CardMeta title={name} description={singer}/>
        <AudioPlayer controls={true} key={id} autoPlay={false}>
          <source src={songURL} type='audio/mpeg'/>
        </AudioPlayer>
      </PlayerBody>
    )
};

interface StateProps {
  id: string,
  name: string,
  avatar: string,
  singer: string,
  songURL: string,
  nextSongID: any,
  previousSongID: any,
}

interface DispatchProps {
  playSong: (songID: string) => (dispatch: any) => void,
}

type PlayerViewProps = StateProps & DispatchProps;

const mapStateToProps = (state: AppState) => ({
  ...getActiveSong(state),
  nextSongID: getNextSongID(state),
  previousSongID: getPreviousSongID(state),
});


const mapDispatchToProps = (dispatch: Redux.Dispatch<any>) => ({
  playSong: (songID: string) => (event: ClickParam) => {
    return dispatch(push(`?song=${songID}`))
  },
});

export const Player = connect(mapStateToProps, mapDispatchToProps)(PlayerView);
