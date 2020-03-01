// NOTE
// Please use your own firebase details below. For more details visit: https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/development/firebaseIntegration.html


import firebase from 'firebase/app'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDnF5aKyrnDADK1bekKOca17W-yBPC1XcE",
  authDomain: "openroad-dashboard.firebaseapp.com",
  databaseURL: "https://openroad-dashboard.firebaseio.com",
  projectId: "openroad-dashboard",
  storageBucket: "openroad-dashboard.appspot.com",
  messagingSenderId: "750287560029",
  appId: "1:750287560029:web:feff8a7600dd1ea10c9cb4",
  measurementId: "G-8QNZP7F5CW"
}

firebase.initializeApp(config)
