import firebase from 'firebase'

if (!firebase.apps.length) {
    firebase.initializeApp({

        apiKey: "AIzaSyC6jo3yKHNrR76koltCvoRL9Cu6Ra7L_jQ",
        authDomain: "puroject-t.firebaseapp.com",
        projectId: "puroject-t",
        storageBucket: "puroject-t.appspot.com",
        messagingSenderId: "552950638328",
        appId: "1:552950638328:web:a0d51e07c40744f4b23d0d",
        measurementId: "G-NZZZKH4529"
    })
}

export default firebase