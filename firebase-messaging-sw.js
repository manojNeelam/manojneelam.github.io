importScripts('https://www.gstatic.com/firebasejs/10.5.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.5.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC98t_l6_cyCPqQF_seZ8dGTh1hLPw6W6o",
  authDomain: "eyezensewebapp.firebaseapp.com",
  projectId: "eyezensewebapp",
  storageBucket: "eyezensewebapp.firebasestorage.app",
  messagingSenderId: "377573843302",
  appId: "1:377573843302:web:92b4c1463207d5c3c2e8a7",
  measurementId: "G-K89RRR3SFZ"
});

const messaging = firebase.messaging();

// Optional: background message handler
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});