// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
    getReactNativePersistence,
    initializeAuth
} from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF4j-mRrwsiOcHKZAz-Ahg9dE0TjAeI_4",
  authDomain: "barangaysos.firebaseapp.com",
  databaseURL:
    "https://barangaysos-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "barangaysos",
  storageBucket: "barangaysos.firebasestorage.app",
  messagingSenderId: "662705280615",
  appId: "1:662705280615:web:0b007c9b43f4e235b6e6c2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

// Initialize Firebase Auth with AsyncStorage persistence for React Native
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Export the database and auth so other files can use them
export { auth, db };

