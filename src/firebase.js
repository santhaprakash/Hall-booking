import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

    const firebaseConfig = {
        apiKey: "AIzaSyBSFu36CcZ_ghABzYnXm6zPIQJCm5oJkSg",
        authDomain: "slotbooking-410cc.firebaseapp.com",
        projectId: "slotbooking-410cc",
        storageBucket: "slotbooking-410cc.appspot.com",
        messagingSenderId: "40648414381",
        appId: "1:40648414381:web:5c709af800f1363bd2e224",
        measurementId: "G-3C2PMV79EC"
      };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore();
export const data=collection(db,"data");
export const hallA=collection(db,"hallA");
export const hallB=collection(db,"hallB");
export const hallC=collection(db,"hallC");
export const hallD=collection(db,"hallD");