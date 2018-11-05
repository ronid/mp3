import * as React from 'react';
import { connect } from 'react-redux';
import { getAllSongsIDS } from '../../reducers/songs';
import { Browser } from '../browser';
import { Navbar } from '../navbar';
import { Player } from '../player';

class Home extends React.Component<{ songsIDs: [] }> {
  public render() {
    return (
      <div>
        <Navbar/>
        <div className='mp3-body'>
          <div className='browser'>
            <Browser songs={this.props.songsIDs}/>
          </div>
          <div className='player'>
            <Player/>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  songsIDs: getAllSongsIDS(state),
});

export const HomeView = connect(mapStateToProps)(Home);

