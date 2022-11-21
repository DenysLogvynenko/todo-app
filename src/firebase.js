import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyD-eSIZ9ji-xE_361EVIkOXoLILco6k11o",
  authDomain: "react-todo-whith-firebas-281ce.firebaseapp.com",
  databaseURL: "https://react-todo-whith-firebas-281ce-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-todo-whith-firebas-281ce",
  storageBucket: "react-todo-whith-firebas-281ce.appspot.com",
  messagingSenderId: "1014599835029",
  appId: "1:1014599835029:web:e166cef103871b3286ea9c"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
