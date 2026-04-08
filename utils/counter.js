import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDMRJXebWJ2qOlNXTH9cQfYnVH8hJmG21o",
  authDomain: "count-a3dc1.firebaseapp.com",
  projectId: "count-a3dc1",
  storageBucket: "count-a3dc1.firebasestorage.app",
  messagingSenderId: "1060848266052",
  appId: "1:1060848266052:web:907707155865302b9e8511",
  measurementId: "G-GXJVS29RWF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exported function
export async function updateLandingPageViews() {
  const counterRef = doc(db, "counters", "landingPageViews");

  try {
    const docSnapshot = await getDoc(counterRef);
    const currentViews = docSnapshot.exists() ? docSnapshot.data().count : 0;
    await setDoc(counterRef, { count: currentViews + 1 });
    // document.querySelector(".count").textContent = `view by ${
    //   currentViews + 1
    // }`;
    console.log("Website view count: ", currentViews + 1);
  } catch (error) {
    console.error("Error updating page views:", error);
  }
}
