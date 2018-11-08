import { push } from 'connected-react-router';
import * as React from 'react';
import { connect } from 'react-redux';
import * as Redux from 'redux';
import { RootAction } from '../../actions';
import { getActiveSong, getAllSongsIDS, getNextSongID, getPreviousSongID } from '../../reducers/songs';
import { AppState, SongState } from '../../types/store';
import { Navbar } from '../navbar';
import { Player } from '../player';
import { PlaylistPanel } from '../playlist/playlistPanel';
import { Row } from '../utils/style';


const PlaylistView = (props: PlaylistPageProps) =>
  (
    <div>
      <Navbar/>
      <Row>
        <PlaylistPanel/>
        <Player currentSong={props.activeSong}
                nextSongID={props.nextSongID}
                previousSongID={props.previousSongID}
                playSong={props.playSong}/>
      </Row>
    </div>
  );

interface StateProps {
  activeSong: SongState | null,
  nextSongID: string | null,
  previousSongID: string | null,
}


interface DispatchProps {
  playSong: (songID: string) => (event: React.MouseEvent<HTMLInputElement>) => void,
}

type PlaylistPageProps = StateProps & DispatchProps;

const mapStateToProps = (state: AppState) => ({
  activeSong: getActiveSong(state),
  nextSongID: getNextSongID(state),
  previousSongID: getPreviousSongID(state),
  songsIDs: getAllSongsIDS(state),
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<RootAction>) => ({
  playSong: (songID: string) => (event: React.MouseEvent<HTMLInputElement>) => {
    return dispatch(push(`?song=${songID}`))
  },
});

export const PlaylistPage = connect(mapStateToProps, mapDispatchToProps)(PlaylistView);