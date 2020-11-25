import firebase from 'firebase/app'
import 'firebase/database';

const config = {
    apiKey: "AIzaSyBeXWVSkc887HASMMXdLZ3rSCzS1tVvv4A",
    authDomain: "lampa-shop.firebaseapp.com",
    databaseURL: "https://lampa-shop.firebaseio.com",
    projectId: "lampa-shop",
    storageBucket: "lampa-shop.appspot.com",
    messagingSenderId: "282276442014",
    appId: "1:282276442014:web:e14ae4a1a5e0dcad21f08f",
    measurementId: "G-B9EZ6FYPZH"
  };
firebase.initializeApp(config)

export const database = firebase.database();