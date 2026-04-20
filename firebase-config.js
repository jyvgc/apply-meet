// ★ Firebase 콘솔에서 발급받은 값으로 교체하세요 ★
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// 관리자 비밀번호 (원하는 값으로 변경)
const ADMIN_PASSWORD = "admin1234";

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
