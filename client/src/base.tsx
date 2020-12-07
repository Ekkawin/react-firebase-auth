import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const app = firebase.initializeApp({
  apiKey: 'AIzaSyBMgFGyWpkWRJfcI7zc_liLaqVRU5YoJc4',
  authDomain: 'fir-react-auth-ef2e2.firebaseapp.com',
  databaseURL: 'https://fir-react-auth-ef2e2-default-rtdb.firebaseio.com',
  projectId: 'fir-react-auth-ef2e2',
  storageBucket: 'fir-react-auth-ef2e2.appspot.com',
  messagingSenderId: '226429138881',
  appId: '1:226429138881:web:01288d9c1fa1c69148e140',
});
