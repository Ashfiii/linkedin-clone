import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCP47cQ_h1a9pliXeLlFrd_WwMmzPRp77o",
    authDomain: "linkedin-clone-198a0.firebaseapp.com",
    projectId: "linkedin-clone-198a0",
    storageBucket: "linkedin-clone-198a0.appspot.com",
    messagingSenderId: "382517309190",
    appId: "1:382517309190:web:8a5e3b391c4961b40b7887"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};