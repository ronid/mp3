import {Avatar, Icon, List} from 'antd';
import * as React from 'react';

export class Song extends React.Component<{
  id: number,
  title: string,
  avatar: string,
  singer: string,
  isActive: boolean,
  playAction: (active: number) => void
}> {

  public getIcons = () => {
    if (this.props.isActive) {
      return <Icon type='pause'/>
    }

    return <Icon type='caret-right' onClick={this.playSong}/>
  };

  public playSong = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    this.props.playAction(this.props.id);
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
