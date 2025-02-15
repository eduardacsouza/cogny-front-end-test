import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsXhVygoeL1cNMF0OhJ7EvNvUuFAeOUsE",
  authDomain: "cognyshoes-e5f78.firebaseapp.com",
  projectId: "cognyshoes-e5f78",
  storageBucket: "cognyshoes-e5f78.firebasestorage.app",
  messagingSenderId: "585084226657",
  appId: "1:585084226657:web:b0d1aa4ad95eeb923c2e20"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

