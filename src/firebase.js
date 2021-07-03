import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDo_vrh4QV5pMsS3GeeG67iWbNbHbKciQs",
    authDomain: "twitter-clone-822f1.firebaseapp.com",
    projectId: "twitter-clone-822f1",
    storageBucket: "twitter-clone-822f1.appspot.com",
    messagingSenderId: "459664316423",
    appId: "1:459664316423:web:cbab4c472bd7b4d28ab2a2",
    measurementId: "G-Z0G4VHBPZF"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  export default db;