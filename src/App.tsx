import 'antd/dist/antd.css';
import * as React from 'react';
import {Provider} from 'react-redux';
import {MP3} from './components/mp3';
import configureStore from './configureStore';


const store = configureStore();
console.log(store.getState());

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <MP3/>
      </Provider>)
  }
}

export default App;
