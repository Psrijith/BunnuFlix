//import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyAdXnQdlFWT5_BefeIEyshV9_tmRYBaaXA",
  authDomain: "netflix-clone-5cc67.firebaseapp.com",
  projectId: "netflix-clone-5cc67",
  storageBucket: "netflix-clone-5cc67.appspot.com",
  messagingSenderId: "476568395064",
  appId: "1:476568395064:web:8f6f41943da3fc107375cd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
