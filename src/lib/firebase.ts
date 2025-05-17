import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjj4tWOwLy1EN0M6lhxspO2oHnLA0Ke64",
  authDomain: "mcp-hack.firebaseapp.com",
  projectId: "mcp-hack",
  storageBucket: "mcp-hack.firebasestorage.app",
  messagingSenderId: "116463781130",
  appId: "1:116463781130:web:575101412ef99b85e426f3",
  measurementId: "G-QGLVTYJWWX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics conditionally (only in browser)
const initializeAnalytics = async () => {
  if (typeof window !== 'undefined') {
    const analyticsSupported = await isSupported();
    if (analyticsSupported) {
      return getAnalytics(app);
    }
  }
  return null;
};

// Initialize auth
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, initializeAnalytics }; 