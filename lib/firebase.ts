// Firebase configuration and initialization
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgZzh2KkVVj3iF25LzUngXtTAc8cdW0Jg",
  authDomain: "silyanas.firebaseapp.com",
  projectId: "silyanas",
  storageBucket: "silyanas.appspot.com", // ✅ fixed
  messagingSenderId: "523342030984",
  appId: "1:523342030984:web:dbf5a0f9570d7dce94d73d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, RecaptchaVerifier, signInWithPhoneNumber };
