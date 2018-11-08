import { Card } from 'antd';
import * as React from 'react';
import { default as styled } from 'styled-components';
import { SongState } from '../types/store';
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

export const Player = (props: PlayerViewProps) => {
  let actions: React.ReactNode[] = [];
  const {currentSong, nextSongID, previousSongID, playSong} = props;
  if (nextSongID && previousSongID) {
    actions = [
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
    ]
  }
  if (currentSong) {
    return (
      <PlayerBody
        cover={<SongCover src={currentSong.avatar}/>}
        actions={actions}>
        <CardMeta title={currentSong.name} description={currentSong.singer}/>
        <AudioPlayer controls={true} key={currentSong.id} autoPlay={false}>
          <source src={currentSong.songURL} type='audio/mpeg'/>
        </AudioPlayer>
      </PlayerBody>
    )
  } else {
    return (
      <PlayerBody>
        <CardMeta title='No active song'/>
        <AudioPlayer>
          <source src='' type='audio/mpeg'/>
        </AudioPlayer>
      </PlayerBody>
    )
  }
};

interface PlayerViewProps {
  currentSong: SongState | null
  nextSongID: string | null
  previousSongID: string | null
  playSong: (songID: string) => (event: React.MouseEvent<HTMLInputElement>) => void
}
