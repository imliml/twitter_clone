import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCib-qNuG8t1aF0AvauYiGFdHIREaTIb9U",
    authDomain: "twitter-19d38.firebaseapp.com",
    databaseURL: "https://twitter-19d38.firebaseio.com",
    projectId: "twitter-19d38",
    storageBucket: "twitter-19d38.appspot.com",
    messagingSenderId: "1096622355047",
    appId: "1:1096622355047:web:2135429c67bcbc6e40dac2"
};

export default firebase.initializeApp(firebaseConfig);