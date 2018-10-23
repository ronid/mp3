import {Card, Icon} from 'antd';
import * as React from "react";

const {Meta} = Card;


export class Player extends React.Component<{
  id: number,
  title: string,
  avatar: string,
  singer: string,
  songURL: string,
  playNext: (currentSong: number) => void,
  playPrevious: (currentSong: number) => void,
}> {

  public nextSong = (event: React.MouseEvent) => {
    event.stopPropagation();
    this.props.playNext(this.props.id);
  };


  public prevSong = (event: React.MouseEvent) => {
    event.stopPropagation();
    this.props.playPrevious(this.props.id);
  };

  public render() {
    return (
      <Card
        cover={<img src={this.props.avatar}/>}
        actions={[
          <Icon key={1} onClick={this.prevSong} type="step-backward"/>,
          <Icon key={3} onClick={this.nextSong} type="step-forward"/>]}>
        <Meta title={this.props.title} description={this.props.singer}/>
        <audio className='audioPlayer' controls={true} key={this.props.id} autoPlay={false}>
          <source src={this.props.songURL} type='audio/mpeg'/>
        </audio>
      </Card>
    )
  }
}
