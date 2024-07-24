// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import env from "react-dotenv";

const firebaseConfig = {
  apiKey: env.Firebase_api_Key,
  authDomain: env.Firebase_auth_Domain,
  projectId: env.Firebase_projectId,
  storageBucket: env.Firebase_storageBucket,
  messagingSenderId: env.Firebase_messagingSenderId,
  appId: env.Firebase_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;    