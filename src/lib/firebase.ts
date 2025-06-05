import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBizDpAJj0-AasnP5O0uSL-RKeAYQqI48g",
  authDomain: "app-stress-112e4.firebaseapp.com",
  projectId: "app-stress-112e4",
  storageBucket: "app-stress-112e4.firebasestorage.app",
  messagingSenderId: "789838527918",
  appId: "1:789838527918:web:b1a2f144170766845e1c3f",
  measurementId: "G-M113HY2E6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Analytics
export const analytics = getAnalytics(app);

export default app; 