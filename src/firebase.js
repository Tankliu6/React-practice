// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    getDocs,
    setDoc, 
    where, 
    query,
    limit, 
    doc
} from "firebase/firestore";
import { firebaseConfig } from "./setting.js";

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {db};