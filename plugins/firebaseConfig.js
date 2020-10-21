import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyBpAws-rVN1gZ0t721HvUWKzSqUNYPMzCg',
    authDomain: 'projectw-56bf9.firebaseapp.com',
    databaseURL: 'https://projectw-56bf9.firebaseio.com',
    projectId: 'projectw-56bf9',
    storageBucket: 'projectw-56bf9.appspot.com',
    messagingSenderId: '65098519936',
    appId: '1:65098519936:web:d94ad0c52377ab1add9d65',
    measurementId: 'G-ZBXEJ83ZK0',
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
