// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { 
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { 
  getFirestore,
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-storage.js";

// 🔹 Your Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs62QLbcgPYJeZIW81L5VnEhx_9qokGaw",
  authDomain: "nfc-dcard.firebaseapp.com",
  projectId: "nfc-dcard",
  storageBucket: "nfc-dcard.appspot.com",
  messagingSenderId: "909323076113",
  appId: "1:909323076113:web:fb1fc2966bd018a053a7b0"
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// --------------------------------------------------
// ✅ SIGN UP FUNCTION
// --------------------------------------------------
export async function signup(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Send verification email
    await sendEmailVerification(user);

    // Optional: store user info in Firestore
    await setDoc(doc(db, "users", user.uid), {
      email: email,
      createdAt: new Date(),
    });

    alert("✅ Account created! Please verify your email before logging in.");
    window.location.href = "index.html"; // Redirect to login page
    return "Account created successfully!";
  } catch (error) {
    console.error("Signup Error:", error.message);
    return "❌ " + error.message;
  }
}

// --------------------------------------------------
// ✅ LOGIN FUNCTION
// --------------------------------------------------
export async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (!user.emailVerified) {
      alert("⚠️ Please verify your email before logging in.");
      await signOut(auth);
      return "Email not verified.";
    }

    alert("✅ Login successful!");
    window.location.href = "profile.html"; // ✅ redirect to profile page after login
    return "";
  } catch (error) {
    console.error("Login Error:", error.message);
    return "❌ " + error.message;
  }
}

// --------------------------------------------------
// ✅ PASSWORD RESET FUNCTION
// --------------------------------------------------
export async function sendPasswordReset(email) {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("📩 Password reset email sent! Please check your inbox.");
  } catch (error) {
    console.error("Password Reset Error:", error.message);
    alert("❌ " + error.message);
  }
}

// --------------------------------------------------
// ✅ LOGOUT FUNCTION (Optional)
// --------------------------------------------------
export async function logout() {
  try {
    await signOut(auth);
    alert("🔒 Logged out successfully.");
    window.location.href = "index.html";
  } catch (error) {
    console.error("Logout Error:", error.message);
  }
}

console.log("✅ Firebase connected successfully");
