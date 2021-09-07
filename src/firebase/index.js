// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP56wOv3esmhsvaSY3kLAlID-JSlcc9uI",
  authDomain: "fakefanthelabel.firebaseapp.com",
  projectId: "fakefanthelabel",
  storageBucket: "fakefanthelabel.appspot.com",
  messagingSenderId: "833288187565",
  appId: "1:833288187565:web:4072e9f861957d3b1ca024",
  measurementId: "G-B7PTYZRF9H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// getData devuelve la conexion con firestore a mi app
export const getData = () => getFirestore(app);
