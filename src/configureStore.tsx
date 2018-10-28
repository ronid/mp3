import {connectRouter, routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import {applyMiddleware, createStore} from 'redux';
import createLogger from 'redux-logger';
import {mp3} from './reducers';

export const history = createBrowserHistory();

const configureStore = () => {
  return createStore(
    connectRouter(history)(mp3),
    {
      playlist: {
        activePlaylist: undefined,
        all: [{
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
      }, {
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
      }]},
      songs: {
        activeSong: 1,
        all: [
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
        ]
      }
    } as any,
    applyMiddleware(routerMiddleware(history), createLogger)
  )
};

export default configureStore;