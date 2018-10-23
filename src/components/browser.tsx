import {List} from 'antd';
import * as React from "react";

export class Browser extends React.Component<{
  songs: object,
  active: number,
  setSong: (active: number) => void
  renderSong: (song: object) => any
}> {

  public render() {
    return <List itemLayout='horizontal' dataSource={this.props.songs} renderItem={this.props.renderSong}/>;
  }
}
