import { Avatar, List } from 'antd';
import * as React from 'react';
import { connect } from 'react-redux';
import { getSong } from '../reducers/songs';
import { AppState } from '../types/store';
import { PlayPauseIcon } from './playPauseIcon';


const SongView = ({id, name, avatar, singer, isActive, playAction}: SongViewProps) => {
  return (
    <List.Item>
      <List.Item.Meta
        title={name}
        avatar={<Avatar src={avatar}/>}
        description={singer}/>
      <PlayPauseIcon isActive={isActive} onClick={playAction(id)}/>
    </List.Item>
  )
};


interface OwnProps {
  id: string,
  isActive: boolean | undefined,
  playAction: (songID: string) => (event: React.MouseEvent<HTMLInputElement>) => void,
}

interface StateProps {
  name?: string,
  avatar?: string,
  singer?: string,

}

type SongViewProps = OwnProps & StateProps;

const mapStateToProps = (state: AppState, ownProps: OwnProps) => ({
  ...getSong(state, ownProps.id),
});


export const Song = connect(mapStateToProps)(SongView);
