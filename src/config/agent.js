import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { FirebaseConfig } from '../config/keys';

firebase.initializeApp(FirebaseConfig);

const databseRef = firebase.database().ref();

const Auth = firebase.auth();

export default firebase;
export const usersRef = databseRef.child('users');
export const todosRef = databseRef.child('todos');
export { Auth };

