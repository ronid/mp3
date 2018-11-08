import { List } from 'antd';
import { push } from 'connected-react-router';
import * as React from 'react';
import { connect } from 'react-redux';
import * as Redux from 'redux';
import styled from 'styled-components';
import { RootAction } from '../actions';
import { getActiveSong } from '../reducers/songs';
import { AppState, SongState } from '../types/store';
import { Song } from './song';


export const BrowserContent = styled.div`
  margin: 15px;
  width: 600px;
`;

class BrowserView extends React.Component<BrowserProps> {
  public renderSong = (songID: string) => (
    <Song
      id={songID}
      isActive={this.props.activeSong? songID === this.props.activeSong.id : false}
      playAction={this.props.setSong}
    />);

  public render() {
    return (
      <BrowserContent>
        <List itemLayout='horizontal' dataSource={this.props.songsIDs} renderItem={this.renderSong}/>
      </BrowserContent>
    )
  }
}


interface OwnProps {
  songsIDs: string[],
}

interface StateProps {
  activeSong: SongState | null,
}

interface DispatchProps {
  setSong: (songID: string) => (event: React.MouseEvent<HTMLInputElement>) => void
}

type BrowserProps = OwnProps & StateProps & DispatchProps;

const mapStateToProps = (state: AppState) => ({
  activeSong: getActiveSong(state),
});


const mapDispatchToProps = (dispatch: Redux.Dispatch<RootAction>) => ({
  setSong: (songID: string) => (event: React.MouseEvent<HTMLInputElement>) => dispatch(push(`?song=${songID}`))
});


export const Browser = connect(mapStateToProps, mapDispatchToProps)(BrowserView);
