import * as React from 'react';
import { connect } from 'react-redux';
import { getAllSongsIDS } from '../../reducers/songs';
import { Browser } from '../browser';
import { Navbar } from '../navbar';
import { Player } from '../player';
import { Row } from '../utils/style';

class Home extends React.Component<{ songsIDs: [] }> {
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


const mapStateToProps = (state) => ({
  songsIDs: getAllSongsIDS(state),
});

export const HomeView = connect(mapStateToProps)(Home);

