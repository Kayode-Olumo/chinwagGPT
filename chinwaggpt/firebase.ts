import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjqQ5L5EDVqc1f4NWx7y-8nqiSrDkZlxY",
  authDomain: "chinwaggpt.firebaseapp.com",
  projectId: "chinwaggpt",
  storageBucket: "chinwaggpt.appspot.com",
  messagingSenderId: "261612259158",
  appId: "1:261612259158:web:ca1321d7382898e055f8f7"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };