import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBclTn4Co7zmDdW3jj3vQbL5QKaQtGAw_w",
  authDomain: "new-coesa.firebaseapp.com",
  projectId: "new-coesa",
  storageBucket: "new-coesa.appspot.com",
  messagingSenderId: "4705400728",
  appId: "1:4705400728:web:3fb4278dc14443cb8cdded",
  measurementId: "G-TWY1SQ2R4M"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


// const analytics = getAnalytics(app);

export {auth, db, storage}