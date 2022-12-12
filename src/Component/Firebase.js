import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyAg4jU8lCJmWCGY8whRINISq37S5E2RWvU",
    authDomain: "ecom-ce32a.firebaseapp.com",
    projectId: "ecom-ce32a",
    storageBucket: "ecom-ce32a.appspot.com",
    messagingSenderId: "814349243651",
    appId: "1:814349243651:web:53df267c988f4fd29a4536",
    measurementId: "G-R53JM6EBV6"
  };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export {auth}