import * as React from 'react';
import { connect } from 'react-redux';
import { getAllSongsIDS } from '../../reducers/songs';
import { AppState } from '../../types/store';
import { Browser } from '../browser';
import { Navbar } from '../navbar';
import { Player } from '../player';
import { Row } from '../utils/style';

class Home extends React.Component<HomeProps> {
  public render() {
    return (
      <div>
        <Navbar/>
        <Row>
          <Browser songsIDs={this.props.songsIDs}/>
          <Player/>
        </Row>
      </div>
    )
  }
}

interface HomeProps {
  songsIDs: string[],
}

const mapStateToProps = (state: AppState) => ({
  songsIDs: getAllSongsIDS(state),
});

export const HomeView = connect(mapStateToProps)(Home);

