import firebase from 'firebase';
require('firebase/auth')

const firebaseConfig = {
    apiKey: "AIzaSyAelRDmXeI6cmz3B11aZL3kGJH4Gzb9Wao",
    authDomain: "basicloginsignup.firebaseapp.com",
    databaseURL: "https://basicloginsignup.firebaseio.com",
    projectId: "basicloginsignup",
    storageBucket: "basicloginsignup.appspot.com",
    messagingSenderId: "134375973466",
    appId: "1:134375973466:web:138a93180e4e78538f2e63",
    measurementId: "G-NJLRY3YP7R"
  };

  const fire = firebase.initializeApp(firebaseConfig)

  export default fire;