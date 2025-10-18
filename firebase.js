// Import the functions you need from the Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs62QLbcgPYJeZIW81L5VnEhx_9qokGaw",
  authDomain: "nfc-dcard.firebaseapp.com",
  projectId: "nfc-dcard",
  storageBucket: "nfc-dcard.appspot.com", // Fixed typo: .app -> .com
  messagingSenderId: "909323076113",
  appId: "1:909323076113:web:fb1fc2966bd018a053a7b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);