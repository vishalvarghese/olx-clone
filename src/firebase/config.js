import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBoYQQQOerXcuR1mCIch_xAQheJNj40ZFU",
    authDomain: "olx-clone-707da.firebaseapp.com",
    projectId: "olx-clone-707da",
    storageBucket: "olx-clone-707da.appspot.com",
    messagingSenderId: "1035219761527",
    appId: "1:1035219761527:web:6550ee7f96ca1e8a1b4972",
    measurementId: "G-Q7BT1WDCMF"
  };

  export default firebase.initializeApp(firebaseConfig)