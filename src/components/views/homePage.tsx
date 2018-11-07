import * as React from 'react';
import { connect } from 'react-redux';
import { getAllSongsIDS } from '../../reducers/songs';
import { AppState } from '../../types/store';
import { Browser } from '../browser';
import { Navbar } from '../navbar';
import { Player } from '../player';
import { Row } from '../utils/style';

const Home = (props: HomeProps) => {
  const {songsIDs} = props;
  return (
    <div>
      <Navbar/>
      <Row>
        <Browser songsIDs={songsIDs}/>
        <Player/>
      </Row>
    </div>
  )
};

interface HomeProps {
  songsIDs: string[],
}

const mapStateToProps = (state: AppState) => ({
  songsIDs: getAllSongsIDS(state),
});

export const HomeView = connect(mapStateToProps)(Home);

