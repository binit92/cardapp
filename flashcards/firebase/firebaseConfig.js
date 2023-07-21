import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBFLAQg8PIy7aU3vOYbqMU0EJnNB_Xoo08",
  authDomain: "cardapp-prototype.firebaseapp.com",
  projectId: "cardapp-prototype",
  storageBucket: "cardapp-prototype.appspot.com",
  messagingSenderId: "520285034610",
  appId: "1:520285034610:web:ed16d31f8b739275facaeb",
  measurementId: "G-KQKEPZZPGC"
};

// Initialize Firebase
const fireconfig = initializeApp(firebaseConfig);
const analytics = getAnalytics(fireconfig);