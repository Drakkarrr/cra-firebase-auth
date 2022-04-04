import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  //firebase api keys
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);