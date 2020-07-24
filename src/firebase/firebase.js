import * as firebase from "firebase";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyCO4Lj9GAqt7w4P-074_Q9lG5xlKaQPKjg",
  authDomain: "ghimmyblog.firebaseapp.com",
  databaseURL: "https://ghimmyblog.firebaseio.com",
  projectId: "ghimmyblog",
  storageBucket: "ghimmyblog.appspot.com",
  messagingSenderId: "148929022689",
  appId: "1:148929022689:web:7e941d1c1596f17fdac5a0",
  measurementId: "G-0CD8WHNTTV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// firebase.database().ref().set({
//     name: 'ifeoluwa',
//     age: 15,
//     hobby: {home: 'games', church: 'bible'}
// })

