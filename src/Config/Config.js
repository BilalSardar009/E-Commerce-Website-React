import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import * as firebase from 'firebase'

 import 'firebase/compat/storage';
// import 'firebase/firestore';
// import 'firebase/auth'

const firebaseConfig = {
    // apiKey: "AIzaSyDGmVBx5LAYJuIq_Ni1nZBenfcVUFX-SyY",
    // authDomain: "ecommerce-with-react-2ac06.firebaseapp.com",
    // databaseURL: "https://ecommerce-with-react-2ac06.firebaseio.com",
    // projectId: "ecommerce-with-react-2ac06",
    // storageBucket: "ecommerce-with-react-2ac06.appspot.com",
    // messagingSenderId: "690603499200",
    // appId: "1:690603499200:web:09860bc318b5b7fd74d725",
    // measurementId: "G-88N35MC51Q"
    
  apiKey: "AIzaSyCCoJ_e9DepKE2Dgqef0RO4CyYX0zWLhG8",
  authDomain: "billi-ecom.firebaseapp.com",
  projectId: "billi-ecom",
  storageBucket: "billi-ecom.appspot.com",
  messagingSenderId: "965377432692",
  appId: "1:965377432692:web:fea33f74db9a2905518521",
  measurementId: "G-EBY6PRP5XS"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }