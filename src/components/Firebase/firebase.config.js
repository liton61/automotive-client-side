
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDVVUnydzPcbFDpBMR6_7iUPGi-oQS9fzk",
  authDomain: "automotive-zone.firebaseapp.com",
  projectId: "automotive-zone",
  storageBucket: "automotive-zone.appspot.com",
  messagingSenderId: "949306583043",
  appId: "1:949306583043:web:c1180f2c2ec9758845c636"
};


const app = initializeApp(firebaseConfig);
export default app;