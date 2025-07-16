import { db } from "./firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export async function updateLandingPageViews() {
  const counterRef = doc(db, "counters", "landingPageViews");

  try {
    const docSnapshot = await getDoc(counterRef);
    const currentViews = docSnapshot.exists() ? docSnapshot.data().count : 0;
    const newViews = currentViews + 1;

    await setDoc(counterRef, { count: newViews });

    return newViews;
  } catch (error) {
    console.error("Error updating page views:", error);
    return null;
  }
}
