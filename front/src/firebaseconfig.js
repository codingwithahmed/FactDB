import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDfTRZOrHvFOD_sxcd88WlHoyXHJF8VtBg",
  authDomain: "factdb-4a5a4.firebaseapp.com",
  projectId: "factdb-4a5a4",
  storageBucket: "factdb-4a5a4.appspot.com",
  messagingSenderId: "388060673911",
  appId: "1:388060673911:web:5cbaed9ff8a6ab5dbd1372",
  measurementId: "G-0GWV54ZZGC"
};

const firebaseapp  = firebase.initializeApp(firebaseConfig)
const ana = firebase.analytics()
export  {ana}