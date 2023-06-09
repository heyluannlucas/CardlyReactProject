// Import the functions you need from the SDKs you need
import { initializeApp  } from  'firebase/app';
import { getAuth,  } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDiYRROTj2kzx2nqw2OeDhXt-2VokuWQ90",
    authDomain: "cardly-e6ce9.firebaseapp.com",
    projectId: "cardly-e6ce9",
    storageBucket: "cardly-e6ce9.appspot.com",
    messagingSenderId: "54358623309",
    appId: "1:54358623309:web:a472a0ec531faca3144804"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;