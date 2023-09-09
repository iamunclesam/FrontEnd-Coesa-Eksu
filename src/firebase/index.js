import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";





// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyDV86E04pfIBPbQnfyeRoDPFiamVZz1lD4",

  authDomain: "coesa-dd1ed.firebaseapp.com",

  databaseURL: "https://coesa-dd1ed-default-rtdb.firebaseio.com",

  projectId: "coesa-dd1ed",

  storageBucket: "coesa-dd1ed.appspot.com",

  messagingSenderId: "262690091547",

  appId: "1:262690091547:web:7d96e73c81ccb843ddbebe",

  measurementId: "G-T7KRL108F3"


};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


// const analytics = getAnalytics(app);

export {auth, db, storage}