// npm
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// properties
const firebaseConfig = {
  apiKey: "AIzaSyA7X955X0ot-U0rUa4ol6zNDK7jFI1j36o",
  authDomain: "bbq-restaurant-sb1.firebaseapp.com",
  projectId: "bbq-restaurant-sb1",
  storageBucket: "bbq-restaurant-sb1.appspot.com",
  messagingSenderId: "719413478680",
  appId: "1:719413478680:web:5aab49ff624e3b967a0a6d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const firestore = getFirestore(app);
export { storage, firestore };
