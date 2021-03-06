import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAlKpA85rcsfXQGv8qmy_eeRNhih8uHoaw',
  authDomain: 'disney-plus-clone-8acbf.firebaseapp.com',
  projectId: 'disney-plus-clone-8acbf',
  storageBucket: 'disney-plus-clone-8acbf.appspot.com',
  messagingSenderId: '185833732805',
  appId: '1:185833732805:web:ebcda8e1d11beea5b88eac',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
