import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyByYNaU41fheBYMw_czfZpzHOGYlRaFJHA",
    authDomain: "yt-clone-77.firebaseapp.com",
    projectId: "yt-clone-77",
    storageBucket: "yt-clone-77.appspot.com",
    messagingSenderId: "82546925264",
    appId: "1:82546925264:web:db23ca2f111b80fa5a48d5"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()