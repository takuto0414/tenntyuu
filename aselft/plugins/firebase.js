import firebase from 'firebase'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyAVzTxxSos1XEQYHW5tQgDAdSBlYVyJ-_0",
        authDomain: "aselft-4e5ad.firebaseapp.com",
        databaseURL: "https://aselft-4e5ad.firebaseio.com",
        projectId: "aselft-4e5ad",
        storageBucket: "aselft-4e5ad.appspot.com",
        messagingSenderId: "756539794486",
        appId: "1:756539794486:web:0382765c74a59051616497",
    })
}

export default firebase