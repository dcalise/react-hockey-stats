import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { FirebaseConfig } from './keys';

firebase.initializeApp(FirebaseConfig);

// const databseRef = firebase.database().ref();

const Auth = firebase.auth();

export default firebase;
// export const todosRef = databseRef.child('todos');
export { Auth };
