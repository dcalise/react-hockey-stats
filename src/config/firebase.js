import firebase from 'firebase';
import { FirebaseConfig } from '../config/keys';

firebase.initializeApp(FirebaseConfig);

const databseRef = firebase.database().ref();

export const todosRef = databseRef.child('todos');