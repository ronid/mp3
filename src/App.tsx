import 'antd/dist/antd.css';
import {ConnectedRouter} from 'connected-react-router';
import * as React from 'react';
import {Provider} from 'react-redux';
import {MP3} from './components/mp3';
import configureStore, {history} from './configureStore';


const store = configureStore();

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <MP3/>
          </div>
        </ConnectedRouter>
      </Provider>)
  }
}

export default App;
