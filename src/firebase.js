import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCoVsgumIxe2uUFTn0AK7mrlZOveodepX8",
    authDomain: "trentovershares.firebaseapp.com",
    projectId: "trentovershares",
    storageBucket: "trentovershares.appspot.com",
    messagingSenderId: "67421294102",
    appId: "1:67421294102:web:5caccaffd1ce12b3c8ef37"
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();