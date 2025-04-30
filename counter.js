import { firebaseConfig } from "./firebaseConfig.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

console.log("hello");
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exported function
export async function updateLandingPageViews() {
  console.log("Updating views");
  const counterRef = doc(db, "counters", "landingPageViews");

  try {
    const docSnapshot = await getDoc(counterRef);
    const currentViews = docSnapshot.exists() ? docSnapshot.data().count : 0;
    await setDoc(counterRef, { count: currentViews + 1 });
    document.querySelector(".count").textContent = `view by ${
      currentViews + 1
    }`;
    console.log("Website view count: ", currentViews + 1);
  } catch (error) {
    console.error("Error updating page views:", error);
  }
}
