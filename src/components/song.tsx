import { Avatar, List } from 'antd';
import * as React from 'react';
import { connect } from 'react-redux';
import { getSong } from '../reducers/songs';
import { PlayPauseIcon } from './playPauseIcon';

const SongView = ({id, name, avatar, singer, isActive, playAction}) => {
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


const mapStateToProps = (state, ownProps) => ({
  ...getSong(state, ownProps.id),
});


export const Song = connect(mapStateToProps)(SongView);
