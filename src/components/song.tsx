import {Avatar, List} from 'antd';
import * as React from 'react';
import {connect} from 'react-redux';
import {getSong} from '../reducers/songs';
import { PlayPauseIcon } from './playPauseIcon';

class SongView extends React.Component<{
  id: number,
  name: string,
  avatar: string,
  singer: string,
  isActive: boolean,
  playAction: (songID: number) => (event: any) => void
}> {


  public render() {
    return (
      <List.Item>
        <List.Item.Meta
          title={this.props.name}
          avatar={<Avatar src={this.props.avatar}/>}
          description={this.props.singer}/>
        <PlayPauseIcon isActive={this.props.isActive} onClick={this.props.playAction(this.props.id)}/>
      </List.Item>
    )
  }
}


const mapStateToProps = (state, ownProps) => ({
  ...getSong(state, ownProps.id),
});


const Song = connect(mapStateToProps)(SongView);
export default Song;



