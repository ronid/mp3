import {Icon, Menu} from 'antd';
import {ClickParam} from "antd/es/menu";
import {find} from 'lodash';
import * as React from 'react';
import Browser  from './browser'
import {Player} from './player';
import {Playlist} from "./playlist";
import {Song} from "./song";

export class MP3 extends React.Component {
  public state = {
    activeRoute: 'live',
    activeSong: 1,
    playlist: [
      {
        name: 'My awesome playlist!',
        songs: [{
          avatar: 'https://img.discogs.com/Fp5qkSrJWc6QjJ7Vs0x6RPd6Oqk=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-10513177-1499258118-3800.jpeg.jpg',
          duration: 4.5,
          id: 0,
          name: 'Versache on the floor',
          singer: 'Bruno Mars',
          songURL: 'http://localhost:3000/beat.mp3'
        },
          {
            avatar: 'https://is1-ssl.mzstatic.com/image/thumb/Music62/v4/40/98/ed/4098edc3-1ae9-4da7-4778-b9d3b8b2a846/075679904119.jpg/939x0w.jpg',
            duration: 4,
            id: 1,
            name: '24k Magic',
            singer: 'Bruno Mars',
            songURL: 'http://localhost:3000/dylan_song.mp3'
          }]
      }
      ,
      {
        name: 'My awesome playlist!2',
        songs: [{
          avatar: 'https://cdn-images-1.medium.com/max/1000/1*w3q8nexX2PYWfy0SgIP1WA.jpeg',
          duration: 2.5,
          id: 2,
          name: 'Finesse',
          singer: 'Bruno Mars',
          songURL: 'http://localhost:3000/latino_hip_hop.mp3'
        },
          {
            avatar: 'https://upload.wikimedia.org/wikipedia/he/6/62/Bruno-mars-when-i-was-your-man.jpg',
            duration: 3,
            id: 3,
            name: 'When I was your man',
            singer: 'Bruno Mars',
            songURL: 'http://localhost:3000/now_or_never.mp3'
          }]
      }
    ],
    songs: [
      {
        avatar: 'https://img.discogs.com/Fp5qkSrJWc6QjJ7Vs0x6RPd6Oqk=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-10513177-1499258118-3800.jpeg.jpg',
        duration: 4.5,
        id: 0,
        name: 'Versache on the floor',
        singer: 'Bruno Mars',
        songURL: 'http://localhost:3000/beat.mp3'
      },
      {
        avatar: 'https://is1-ssl.mzstatic.com/image/thumb/Music62/v4/40/98/ed/4098edc3-1ae9-4da7-4778-b9d3b8b2a846/075679904119.jpg/939x0w.jpg',
        duration: 4,
        id: 1,
        name: '24k Magic',
        singer: 'Bruno Mars',
        songURL: 'http://localhost:3000/dylan_song.mp3'
      },
      {
        avatar: 'https://cdn-images-1.medium.com/max/1000/1*w3q8nexX2PYWfy0SgIP1WA.jpeg',
        duration: 2.5,
        id: 2,
        name: 'Finesse',
        singer: 'Bruno Mars',
        songURL: 'http://localhost:3000/latino_hip_hop.mp3'
      },
      {
        avatar: 'https://upload.wikimedia.org/wikipedia/he/6/62/Bruno-mars-when-i-was-your-man.jpg',
        duration: 3,
        id: 3,
        name: 'When I was your man',
        singer: 'Bruno Mars',
        songURL: 'http://localhost:3000/now_or_never.mp3'
      },
    ],
  };

  public setSong = (songID: number) => {
    this.setState({activeSong: songID});
  };

  public playNext = (currentSongID: number) => this.setState({activeSong: (currentSongID + 1) % this.state.songs.length});

  public playPrevious = (currentSongID: number) => {
    let previousSong = currentSongID - 1;
    if (previousSong === 0) {
      previousSong = this.state.songs.length - 1;
    }
    this.setState({activeSong: previousSong})
  };

  public changeRoute = (e: ClickParam) => {
    this.setState({activeRoute: e.key})
  };

  public renderSong = (item) => (<Song
    id={item.id}
    title={item.name}
    avatar={item.avatar}
    isActive={item.id === this.state.activeSong}
    singer={item.singer}
    playAction={this.setSong}
  />);

  public renderContent = () => {
    const currentSong = find(this.state.songs, {id: this.state.activeSong});
    if (this.state.activeRoute === 'live') {


      return (
        <div className='mp3-body'>
          <div className='browser'>
            <Browser songs={this.state.songs} active={this.state.activeSong} setSong={this.setSong}
                     renderSong={this.renderSong}/>
          </div>
          <div className='player'>
            <Player
              id={currentSong.id}
              title={currentSong.name}
              avatar={currentSong.avatar}
              singer={currentSong.singer}
              playNext={this.playNext}
              playPrevious={this.playPrevious}
              songURL={currentSong.songURL}
            />
          </div>
        </div>
      )

    } else if (this.state.activeRoute === 'playlist') {
      return <Playlist playlist={this.state.playlist} renderSong={this.renderSong}/>

    } else {
      return <div>Invalid URL</div>
    }
  };

  public render() {
    return (
      <div>
        <Menu onClick={this.changeRoute} selectedKeys={[this.state.activeRoute]} mode="horizontal">
          <Menu.Item key="live">
            <Icon type="home"/>Live
          </Menu.Item>
          <Menu.Item key="playlist">
            <Icon type="bars"/>Playlists
          </Menu.Item>
        </Menu>
        {this.renderContent()}
      </div>
    )
  }
}
