import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import { firebaseConfig } from "../config/firebase.config";

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
