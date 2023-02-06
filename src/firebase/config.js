import firebase from 'firebase/compat/app';
import "firebase/database"
import 'firebase/storage';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5RSGOZdURRmWFvZPP0xJEocpqWJLCxtM",
  authDomain: "galery-firegram.firebaseapp.com",
  projectId: "galery-firegram",
  storageBucket: "galery-firegram.appspot.com",
  messagingSenderId: "412713968267",
  appId: "1:412713968267:web:a0790bfec0b3675a736a8e"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp}