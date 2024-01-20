import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB91By8lxbsSLTdhnPunFQNI3HNBuSYpN4",
  authDomain: "fddd-26037.firebaseapp.com",
  projectId: "fddd-26037",
  storageBucket: "fddd-26037.appspot.com",
  messagingSenderId: "98533996832",
  appId: "1:98533996832:web:3937c7e34b26bc986aff45"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { auth }