import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD7ArTf7ls5vzAuULbw1Jy3HilSWXAwWmU",
  authDomain: "felipe-react-todo.firebaseapp.com",
  databaseURL: "https://felipe-react-todo.firebaseio.com",
  storageBucket: "felipe-react-todo.appspot.com",
  messagingSenderId: "1052410889605"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Felipe',
    age: 30
  }  
});

// Reference to todos
var todosRef = firebaseRef.child('todos');

// add on child_added
todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
})

var newTodoRef = todosRef.push({
  text: 'Walk the dog'
});

var newTodoRef = todosRef.push({
  text: 'Feed the cat'
});

// add two todos to the array; pass with text property

// var notesRef = firebaseRef.child('notes');

// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// })

// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// })

// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// })

// var newNoteRef = notesRef.push({
//   text: 'walk the dog!!'
// });
// console.log('Todo id', newNoteRef.key);