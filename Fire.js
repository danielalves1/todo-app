import firebase from "firebase";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmV042aWDtc1bbDqX-JRy9fZ7vP4arKdE",
  authDomain: "todoapp-b2f4b.firebaseapp.com",
  databaseURL: "https://todoapp-b2f4b.firebaseio.com",
  projectId: "todoapp-b2f4b",
  storageBucket: "todoapp-b2f4b.appspot.com",
  messagingSenderId: "263386017252",
  appId: "1:263386017252:web:6d2341998fca584ed26bf1",
};

class Fire {
  constructor(callback) {
    this.init(callback);
  }

  init(callback) {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        callback(null, user);
      } else {
        firebase
          .auth()
          .signInAnonymously()
          .catch((error) => {
            callback(error);
          });
      }
    });
  }
}

export default Fire;
