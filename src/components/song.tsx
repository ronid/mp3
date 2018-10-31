import {Avatar, Icon, List} from 'antd';
import * as React from 'react';
import {connect} from 'react-redux';
import {getSong} from '../reducers/songs';

class SongView extends React.Component<{
  id: number,
  title?: string,
  avatar?: string,
  singer?: string,
  isActive?: boolean,
  playAction: (songID: number) => (event: any) => void
}> {

  public getIcons = () => {
    if (this.props.isActive) {
      return <Icon type='pause'/>
    }
    return <Icon type='caret-right' onClick={this.props.playAction(this.props.id)}/>
  };


  public render() {
    return (
      <List.Item>
        <List.Item.Meta
          title={this.props.title}
          avatar={<Avatar src={this.props.avatar}/>}
          description={this.props.singer}/>
        {this.getIcons()}
      </List.Item>
    )
  }
}


const mapStateToProps = (state, ownProps) => ({
  ...getSong(state, ownProps.id),
});


const Song = connect(mapStateToProps)(SongView);
export default Song;



