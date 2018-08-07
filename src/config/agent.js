import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { FirebaseConfig } from './keys';

firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();

const Auth = firebase.auth();

export default firebase;

export const profilesRef = databaseRef.child('profiles');
// export const todosRef = databseRef.child('todos');
export { Auth };
