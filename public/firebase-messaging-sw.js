importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyADn77idSXovkHRRCOE1OwvFjSg-2IbZAs",
    authDomain: "quiz-pwa-1d8b8.firebaseapp.com",
    databaseURL: "https://quiz-pwa-1d8b8.firebaseio.com",
    projectId: "quiz-pwa-1d8b8",
    storageBucket: "quiz-pwa-1d8b8.appspot.com",
    messagingSenderId: "520375659719",
    appId: "1:520375659719:web:6c49a37b6b924fd262a2e2"
});

const messaging = firebase.messaging();