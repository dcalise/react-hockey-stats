import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { FirebaseConfig } from '../config/keys';

firebase.initializeApp(FirebaseConfig);

const databseRef = firebase.database().ref();

export default firebase;
export const todosRef = databseRef.child('todos');
export const Auth = firebase.auth();

