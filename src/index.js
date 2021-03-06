import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import config from './config/config';
import firebase from 'firebase/app'
import 'firebase/firestore'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';


if (firebase.apps.length === 0)
  firebase.initializeApp(config)

export const firestore = firebase.firestore()
const store = createStore(rootReducer);

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

<Provider store={ store }>
<App />
</Provider>, 

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
