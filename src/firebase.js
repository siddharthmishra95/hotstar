import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBtmzUPY9gpZV9UKDEQ6CFtV6v9MtwEo94",
  authDomain: "disneyplus-clone-d809c.firebaseapp.com",
  projectId: "disneyplus-clone-d809c",
  storageBucket: "disneyplus-clone-d809c.appspot.com",
  messagingSenderId: "966429275050",
  appId: "1:966429275050:web:c491f0ade2fe616cdf71d3",
  measurementId: "G-X7HBQRS08C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
