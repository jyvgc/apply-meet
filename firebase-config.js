const firebaseConfig = {
  apiKey: "AIzaSyDhRzzCu_0VEHdQX8R8q-FCJZ0v_3Px3go",
  authDomain: "apply-meet.firebaseapp.com",
  databaseURL: "https://apply-meet-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "apply-meet",
  storageBucket: "apply-meet.firebasestorage.app",
  messagingSenderId: "975374539952",
  appId: "1:975374539952:web:e78290008b25970be1ef75"
};

const ADMIN_EMAILS = [
  "jykim@gumi.ac.kr"
];

firebase.initializeApp(firebaseConfig);
const db   = firebase.database();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
