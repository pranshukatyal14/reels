
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: add SDKs for Firebase products that you want to use

// your web app's firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyAhAJnEcf2IgaFMk0ZSWNhDpTGtR5D8BqI",
  
    authDomain: "reels-yt-23f41.firebaseapp.com",
  
    projectId: "reels-yt-23f41",
  
    storageBucket: "reels-yt-23f41.appspot.com",
  
    messagingSenderId: "965079179130",
  
    appId: "1:965079179130:web:b79eff25b3b42af6f5c0c3"
  
  };

  // Initialize firebase
  firebase.initializeApp(firebaseConfig);

  export const auth=firebase.auth();

  const firestore=firebase.firestore();
  export const database={
      users:firestore.collection('users'),
      getTimeStamp:firebase.firestore.FieldValue.serverTimestamp,
  }
  export const storage = firebase.storage()