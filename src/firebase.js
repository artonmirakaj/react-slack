import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var config = {
  apiKey: 'AIzaSyBqwMdmTjBlxtilUPBH8GoeuooRgzynqOU',
  authDomain: 'react-slack-clone-4e2ff.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-4e2ff.firebaseio.com',
  projectId: 'react-slack-clone-4e2ff',
  storageBucket: 'react-slack-clone-4e2ff.appspot.com',
  messagingSenderId: '248256697778'
};
firebase.initializeApp(config);

export default firebase;
