import firebase from "firebase";
import "firebase/storage";

const config = {
    apiKey: "AIzaSyAaxqFVGUVHOHVrKv2Ex-4JRMihB8dG7g4",
    authDomain: "miniproject240311.firebaseapp.com",
    databaseURL: "https://miniproject240311.firebaseio.com",
    projectId: "miniproject240311",
    storageBucket: "miniproject240311.appspot.com",
    messagingSenderId: "238145907572",
    appId: "1:238145907572:web:c0abe35b14c6167a6e9a21",
    measurementId: "G-R511HN7FEV"
  };

  firebase.initializeApp(config);
  const storage = firebase.storage();

  
export { storage, firebase as default };

