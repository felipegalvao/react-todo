import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD7ArTf7ls5vzAuULbw1Jy3HilSWXAwWmU",
    authDomain: "felipe-react-todo.firebaseapp.com",
    databaseURL: "https://felipe-react-todo.firebaseio.com",
    storageBucket: "felipe-react-todo.appspot.com",
    messagingSenderId: "1052410889605"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;