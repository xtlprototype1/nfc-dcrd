// Import the functions you need from the Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  sendPasswordResetEmail 
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs62QLbcgPYJeZIW81L5VnEhx_9qokGaw",
  authDomain: "nfc-dcard.firebaseapp.com",
  projectId: "nfc-dcard",
  storageBucket: "nfc-dcard.appspot.com",
  messagingSenderId: "909323076113",
  appId: "1:909323076113:web:fb1fc2966bd018a053a7b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// ✅ LOGIN FUNCTION
export async function login(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "admin.html"; // redirect if successful
    return "";
  } catch (error) {
    console.error("Login Error:", error.message);
    return error.message;
  }
}

// ✅ PASSWORD RESET FUNCTION
export async function sendPasswordReset(email) {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset email sent! Please check your inbox.");
  } catch (error) {
    console.error("Password Reset Error:", error.message);
    alert("Error: " + error.message);
  }
}
