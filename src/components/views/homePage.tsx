import { push } from 'connected-react-router';
import * as React from 'react';
import { connect } from 'react-redux';
import * as Redux from 'redux';
import { RootAction } from '../../actions';
import { getActiveSong, getAllSongsIDS, getNextSongID, getPreviousSongID } from '../../reducers/songs';
import { AppState, SongState } from '../../types/store';
import { Browser } from '../browser';
import { Navbar } from '../navbar';
import { Player } from '../player';
import { Row } from '../utils/style';

const Home = (props: HomeProps) => {
  const {songsIDs, activeSong, nextSongID, previousSongID, playSong} = props;
  return (
    <div>
      <Navbar/>
      <Row>
        <Browser songsIDs={songsIDs}/>
        <Player currentSong={activeSong} previousSongID={previousSongID} nextSongID={nextSongID} playSong={playSong}/>
      </Row>
    </div>
  )
};

interface StateProps {
  activeSong: SongState | null,
  songsIDs: string[],
  nextSongID: string | null,
  previousSongID: string | null,
}


interface DispatchProps {
  playSong: (songID: string) => (event: React.MouseEvent<HTMLInputElement>) => void,
}

type HomeProps = StateProps & DispatchProps;

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

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(Home);

