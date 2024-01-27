import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDKc9AP4_-YgSCtCo5fGstMZByPulPUrEc',
  authDomain: 'music-4c52e.firebaseapp.com',
  projectId: 'music-4c52e',
  storageBucket: 'music-4c52e.appspot.com',
  appId: '1:285867935371:web:955c0802162022bae4368e'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')

export { auth, db, usersCollection, songsCollection, storage }
