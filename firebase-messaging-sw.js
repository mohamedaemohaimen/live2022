importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyAq8qLsEN2PI95YpM8Q_SyHFnnlCnURJ_A",
    authDomain: "kuayl-10911.firebaseapp.com",
    projectId: "kuayl-10911",
    storageBucket: "kuayl-10911.appspot.com",
    messagingSenderId: "691872573803",
    appId: "1:691872573803:web:ac311596799d5f0139042e",
    measurementId: "G-9MH5H7W6BW"
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});