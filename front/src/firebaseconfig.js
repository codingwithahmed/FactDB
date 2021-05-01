import firebase from 'firebase'

 const firebaseConfig = {
    apiKey: "AIzaSyAfHGxerjsJFOGNYp6vVn0Ch_SuWRw4SKA",
    authDomain: "factify-451bb.firebaseapp.com",
    projectId: "factify-451bb",
    storageBucket: "factify-451bb.appspot.com",
    messagingSenderId: "1062379335974",
    appId: "1:1062379335974:web:a372491197bb880fea51e7",
    measurementId: "G-HLW9N7KPML"
  };

const firebaseapp  = firebase.initializeApp(firebaseConfig)

const ana = firebase.analytics()
export  {ana}